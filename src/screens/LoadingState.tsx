import * as S from "../styles/loadingState"
import TopBar from "../components/topBar";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function LoadingScreen() {
  const { cart } = useContext(CartContext);
  return (

    <S.MainContainer>
    <TopBar amount={cart.length} />
    <S.Spinner />
    </S.MainContainer>
  );
}

export default LoadingScreen;
