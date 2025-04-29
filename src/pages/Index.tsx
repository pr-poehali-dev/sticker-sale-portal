import { useState } from "react";
import Navbar from "@/components/Navbar";
import StickerCard from "@/components/StickerCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";

// Типичные данные стикеров
const STICKERS = [
  {
    id: 1,
    name: "Космический котик",
    price: 149,
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Животные"
  },
  {
    id: 2,
    name: "Цветочный единорог",
    price: 129,
    image: "https://images.unsplash.com/photo-1531425300797-d5dc8b021c84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Фэнтези"
  },
  {
    id: 3,
    name: "Мультяшный ноутбук",
    price: 99,
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Техника"
  },
  {
    id: 4,
    name: "Смайлик радуга",
    price: 79,
    image: "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Эмодзи"
  },
  {
    id: 5,
    name: "Горы и закат",
    price: 119,
    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Природа"
  },
  {
    id: 6,
    name: "Веселый авокадо",
    price: 89,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Еда"
  }
];

const CATEGORIES = ["Животные", "Фэнтези", "Техника", "Эмодзи", "Природа", "Еда"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredStickers = selectedCategory === "all" 
    ? STICKERS 
    : STICKERS.filter(sticker => sticker.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-sticker-lightblue py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Яркие стикеры для<br /> твоего настроения
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Украсьте свой день с нашей коллекцией уникальных стикеров ручной работы.
              От милых животных до забавных фраз — у нас есть все!
            </p>
            <Button className="bg-sticker-skyblue hover:bg-sticker-blue text-white px-8 py-3 rounded-lg font-medium text-lg">
              Смотреть каталог
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <img 
                src="https://images.unsplash.com/photo-1620075242724-352122b77856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Коллекция стикеров" 
                className="absolute h-48 w-48 md:h-64 md:w-64 object-cover rounded-lg shadow-lg transform -rotate-6 animate-float"
              />
              <img 
                src="https://images.unsplash.com/photo-1546198632-9ef6368bef12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Стикеры в действии" 
                className="absolute top-16 left-16 h-48 w-48 md:h-64 md:w-64 object-cover rounded-lg shadow-lg transform rotate-6 z-10 animate-float" 
                style={{animationDelay: '1s'}}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Наши стикеры</h2>
          <CategoryFilter 
            categories={CATEGORIES} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStickers.map(sticker => (
            <StickerCard key={sticker.id} {...sticker} />
          ))}
        </div>
        
        {filteredStickers.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">Стикеры не найдены</p>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-sticker-skyblue mb-2">СтикерШоп</h2>
            <p className="text-gray-600 mb-4">© 2025 СтикерШоп. Все права защищены.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-sticker-blue">О нас</a>
              <a href="#" className="text-gray-500 hover:text-sticker-blue">Контакты</a>
              <a href="#" className="text-gray-500 hover:text-sticker-blue">Доставка</a>
              <a href="#" className="text-gray-500 hover:text-sticker-blue">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
