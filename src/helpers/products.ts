import { Product } from "@prisma/client";


interface ProductsWithTotalPrice extends Product {
    totalPrice: number;
}


export const computeProductsTotalPrice = (product: Product) => {
    if (product.discountPercentage == 0) {
        return {
            ...product,
            totalPrice: Number(product.basePrice),
        }
    }
    
    const totalPrice =
    Number(product.basePrice) * (product.discountPercentage / 100);

    return {
        ...product,
        totalPrice,
    }
}