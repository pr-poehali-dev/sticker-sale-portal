import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface StickerCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const StickerCard = ({ name, price, image, category }: StickerCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 border-muted">
      <div className="bg-muted h-48 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-sticker-skyblue text-white text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
        <p className="text-lg font-bold text-sticker-blue">{price} ₽</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-sticker-skyblue hover:bg-sticker-blue">
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StickerCard;
