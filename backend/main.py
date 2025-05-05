from fastapi import FastAPI
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, Text, text
from sqlalchemy.orm import sessionmaker, declarative_base
import yaml

# 讀取 YAML 設定檔
with open("config.yaml", "r") as f:
    config = yaml.safe_load(f)

db_config = config["database"]
SQLALCHEMY_DATABASE_URL = (
    f"mysql+pymysql://{db_config['user']}:{db_config['password']}@"
    f"{db_config['host']}:{db_config['port']}/{db_config['name']}"
)

# 資料庫初始化
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# FastAPI 應用程式
app = FastAPI()

# ORM 模型
class FoodPost(Base):
    __tablename__ = "food_posts"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255))
    description = Column(Text)
    image_url = Column(Text)
    user_id = Column(Integer)

# 建立資料表（若不存在）
Base.metadata.create_all(bind=engine)

# 接收資料格式
class PostCreate(BaseModel):
    title: str
    description: str
    image_url: str
    user_id: int

# 建立資料 API
@app.post("/food-posts")
def create_post(post: PostCreate):
    db = SessionLocal()
    new_post = FoodPost(**post.dict())
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    db.close()
    return {"message": "Post created", "post_id": new_post.id}

# 測試資料庫連線 API
@app.get("/db-test")
def test_db():
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT 1"))
        return {"status": "✅ Database connected successfully!"}
    except Exception as e:
        return {"status": "❌ Failed", "error": str(e)}

# 啟動伺服器（執行此檔案才會執行）
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
