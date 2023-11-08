import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/products-images";
import ProductInfo from "./components/products-info";
import { computeProductsTotalPrice } from "@/helpers/products";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImages name={product.name} imageUrls={product.imageUrls} />
      <ProductInfo product={computeProductsTotalPrice(product)}/>
    </div>
  );
};

export default ProductDetailPage;
