import { Category } from "@prisma/client";
import { Badge} from "@/components/ui/badge"
import { CATEGORY_ICON } from "@/constants/category-items";

interface CategoryItemProps {
    category: Category
}




const CategoryItem = ({category}: CategoryItemProps) => {
    return ( 
        <Badge variant="outline" className="rounded-lg gap-2 py-3 flex justify-center items-center">
            {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
            <span className="font-bold text-xs" >{category.name}</span>
        </Badge>
     );
}
 
export default CategoryItem;