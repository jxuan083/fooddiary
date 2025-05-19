
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary">
          美食探索
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-primary">
            首頁
          </Link>
          <Link to="/recommendation" className="text-gray-600 hover:text-primary">
            今天吃什麼
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-primary">
            個人檔案
          </Link>
          <Link to="/buddies" className="text-gray-600 hover:text-primary">
            我的餐友
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline">登入</Button>
          <Button className="hidden md:block">註冊</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
