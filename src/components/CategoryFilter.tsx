import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        className={selectedCategory === "all" ? "bg-sticker-skyblue hover:bg-sticker-blue" : ""}
        onClick={() => onSelectCategory("all")}
      >
        Все
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={selectedCategory === category ? "bg-sticker-skyblue hover:bg-sticker-blue" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
