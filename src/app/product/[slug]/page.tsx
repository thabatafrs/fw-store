import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/products-images";

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
    <div>
      <ProductImages name={product.name} imageUrls={product.imageUrls} />
    </div>
  );
};

export default ProductDetailPage;
