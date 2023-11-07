import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-items";
import { computeProductsTotalPrice } from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {

  const category = await prismaClient.category.findFirst({
    where: {
        slug: params.slug,
    },
    include: {
      products: true
    }
  })

  if (!category) {
    return null;
  }

  return (
    <div className="p-5 flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375] text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem key={product.id} product={computeProductsTotalPrice(product)} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
