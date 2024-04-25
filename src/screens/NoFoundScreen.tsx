import ImageWithNothing from "../assets/Frame 2111.png";
import Box from "../components/box";
import * as S from "../styles/app"
import TopBar from "../components/topBar";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function NoFoundScreen() {
  const { cart } = useContext(CartContext);
function reloadPage(){
  window.location.reload();
}
  return (

    <S.MainContainer>
    <TopBar amount={cart.length} />
    <Box title="Parece que não há nada por aqui :(" image={ImageWithNothing} buttonText="Recarregar página" buttonAction={reloadPage}/>
    </S.MainContainer>
  );
}

export default NoFoundScreen;
