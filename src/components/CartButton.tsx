import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Cart from "./Cart";

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsCartOpen(true)}
        className="relative"
      >
        <ShoppingCart className="w-4 h-4" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
        <span className="ml-2 hidden sm:inline">Carrinho</span>
      </Button>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default CartButton;