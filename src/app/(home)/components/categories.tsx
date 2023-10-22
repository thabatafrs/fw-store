import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = async () => {

    const categories = await prismaClient.category.findMany({})

    return ( <div className="grid grid-cols-2 gap-y-4 gap-x-16">
        {categories.map(category => <CategoryItem key={category.id} category={category} />)}
    </div> );
}
 
export default Categories;