import { ProductsWithTotalPrice } from "@/helpers/products";
import { ArrowBigDownIcon } from "lucide-react";
import Image from "next/image"
import { Badge } from "./badge";

interface ProductItemProps {
    product: ProductsWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return ( <div className="flex flex-col gap-4 max-w-[156px]">
        <div className="relative bg-accent rounded-lg h-[170px] w-[156px] flex items-center bg-center">
        <Image 
        src={product.imageUrls[0]}
        height={0}
        width={0}
        sizes="100vw"
        alt={product.name}
        className="h-auto w-auto max-h-[70%] max-w-[80%]"
        style={{objectFit: "contain",}}
        />

        {product.discountPercentage = 0 && (
            <Badge className="absolute top-4 left-4">
                <ArrowBigDownIcon/> {product.discountPercentage}%
            </Badge>
        )}
        </div>

        

        <div>
            <p className="text-ellipsis text-sm overflow-hidden whitespace-nowrap">
                {product.name}
            </p>

            <div className="flex items-center gap´-2">
                {product.discountPercentage > 0 ? (
                <>
                <p className="font-semibold text-sm">
                    R$ {product.totalPrice.toFixed(2)}
                </p>
                <p className="opacity-75 line-true text-xs">
                    R$ {Number(product.basePrice).toFixed(2)}
                </p>
                </>
                ) : (
                    <p className="font-semibold text-sm">
                    R$ {product.totalPrice.toFixed(2)}
                </p>
                )} 
            </div>
        </div>
    </div> );
}
 
export default ProductItem;