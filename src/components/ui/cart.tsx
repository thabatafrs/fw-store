import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductsTotalPrice } from "@/helpers/products";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5 ">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductsTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p>Carrinho vazio. Vamos fazer compras?</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
