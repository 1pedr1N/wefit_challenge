import { useEffect, useState, useContext } from "react";
import getMovies from "../services/movie";
import { IProductProps } from "@/interfaces/interface.product";
import { AxiosResponse } from "axios";
import * as S from "../styles/app";
import TopBar from "../components/topBar";
import { CartContext } from "../context/cartContext";
import CartBox from "../components/boxCart";

function Cart() {
  const [movies, setMovies] = useState<IProductProps[]>([]);
  const { cart } = useContext(CartContext);
  useEffect(() => {
    getMovies().then((response: AxiosResponse<{ products: IProductProps[] }>) =>
      setMovies(response.data.products)
    );
    console.log(movies);
  }, []);
  function priceTotal() {
    let total = 0;
    cart.forEach((cart) => {
      total += cart.amount * cart.product.price;
      total = parseFloat(total.toFixed(2));
    });
    return total;
  }

  
  return (
    <S.MainContainer>
      <TopBar amount={cart.length} />
      {!cart.length && <>carrinho vazio</>}

      {!!cart.length && (
        <>
          {cart.map((cart) => (
            <CartBox
              image={cart.product.image}
              title={cart.product.title}
              numberProducts={cart.amount}
              totalPrice={priceTotal()}
              id={0}
              price={cart.product.price}
              addButton={cart.product}
              removeButton={cart.product}
            />
          ))}
        </>
      )}
    </S.MainContainer>
  );
}

export default Cart;
