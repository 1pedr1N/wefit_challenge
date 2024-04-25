import ImageFinishedOrder from "../assets/backgroundOrderFineshed.svg";
import Box from "../components/box";
import * as S from "../styles/app"
import TopBar from "../components/topBar";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function OrderFineshed() {
  const { cart } = useContext(CartContext);
function backToHome (){
  window.location.href = "/";
}
  return (

    <S.MainContainer>
    <TopBar amount={cart.length} />
    <Box title="Compra realizada com sucesso!" image={ImageFinishedOrder} buttonText="Voltar" buttonAction={backToHome}/>
    </S.MainContainer>
  );
}

export default OrderFineshed;
