import * as S from "../styles/loadingState"
import TopBar from "../components/topBar";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Breadcrumb from "../components/breadChumpProps";

function LoadingScreen() {
  const { cart } = useContext(CartContext);
  return (

    <S.MainContainer>
    <TopBar amount={cart.length} />
    <Breadcrumb routes={[
      {
        path: "/",
        name: "Negrito"
      },
      {
        path: "/cart",
        name: "adwadawd"
      },
    ]} />
    </S.MainContainer>
  );
}

export default LoadingScreen;
