import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-sticker-skyblue mr-8">СтикерШоп</h1>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="font-medium text-gray-700 hover:text-sticker-blue transition-colors">
              Главная
            </a>
            <a href="#" className="font-medium text-gray-700 hover:text-sticker-blue transition-colors">
              Каталог
            </a>
            <a href="#" className="font-medium text-gray-700 hover:text-sticker-blue transition-colors">
              Новинки
            </a>
            <a href="#" className="font-medium text-gray-700 hover:text-sticker-blue transition-colors">
              О нас
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              type="text" 
              placeholder="Поиск стикеров..." 
              className="pl-10 w-64 h-9 bg-muted focus:bg-white" 
            />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-sticker-skyblue text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
