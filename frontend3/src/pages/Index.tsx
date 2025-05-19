
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            和朋友一起尋找美食
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-gray-700">
            發現您附近的美食寶藏，與朋友分享難忘的用餐體驗
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/explore">
              <Button size="lg" className="px-8 py-6 text-lg rounded-full group">
                開始探索
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/login">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg rounded-full border-2 hover:bg-orange-50"
              >
                登入 / 註冊
                <LogIn className="ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 max-w-4xl w-full overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="餐廳美食氛圍圖" 
            className="w-full h-auto object-cover aspect-[16/9]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
