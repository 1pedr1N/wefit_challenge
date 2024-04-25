import { CartBoxProps } from "@/interfaces/interface.boxCart";
import * as S from "../styles/cartBox";
import TrashIcon from "../assets/TrashIcon.svg";
import Plus from "../assets/plus.svg";
import Minus from "../assets/minus.svg";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useMediaQuery } from '@react-hook/media-query';
const CartBox = ({...props}: CartBoxProps) => {
  const { removeProduct, addProduct, } = useContext(CartContext);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  function clickButton() {
    window.location.href = "/orderFineshed";
  }
  return (
 
    <S.Box>
       {isDesktop && (
        <table
style={{
  width: "100%",
  padding: "10px",
}}
>
  <tr style={{
    width: "100%",
    textAlign: "left",
  }}> 
    <S.ThText 
    style={{
      width: "40%",
    
    }}
    
    >Produto</S.ThText>
    <S.ThText     style={{
      width: "30%",
    
    }}
    >QTD</S.ThText>
    <S.ThText  
    style={{
      width: "40%",
    }}>Subtotal</S.ThText>
    <th></th>
  </tr>
  <tr
  style={{
    textAlign: "left",
  }}
  >
    <td
    style={
      {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "50%",
      }
    }
    
    >
      <S.Image src={props.image} alt="product" />
      <S.TitleDiv>
     <S.TitleText>   {props.title} </S.TitleText>
   <S.PriceText>   R$ {(props.price).toFixed(2)} </S.PriceText>
      </S.TitleDiv>
   
    </td>
    <td
    
    >
      <S.AlignCounter>
      <img src={Minus} alt="minus" onClick={
          () => removeProduct(props.removeButton)
        
        } />
<S.CounterBorder> {props.numberProducts}</S.CounterBorder>
        <img src={Plus} alt="plus" onClick={
          () => addProduct(props.addButton)
        
        }/>
         </S.AlignCounter>

    </td>
    <td>R$ {(props.price * props.numberProducts).toFixed(2)}</td>
    <td><img src={TrashIcon} alt="trash" onClick={() => removeProduct(props.removeButton)} /></td>
  </tr>
</table>
)}
{
  !isDesktop && (
    <S.MobileDiv>
    <S.Image src={props.image} alt="product" />
    <S.MobileDivBoth> 
   <S.MobileDivUpper>
    <S.TitleText> {props.title} </S.TitleText>
    <div
    style={
      {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }
    } 
    >
    <S.PriceText> R$ {(props.price).toFixed(2)} </S.PriceText>
    <img src={TrashIcon} alt="trash" onClick={() => removeProduct(props.removeButton)} />
    </div>
   </S.MobileDivUpper>
    <S.MobileDivLower>  
    <S.AlignCounter>
      <img src={Minus} alt="minus" onClick={
          () => removeProduct(props.removeButton)
        
        } />
<S.CounterBorder> {props.numberProducts}</S.CounterBorder>
        <img src={Plus} alt="plus" onClick={
          () => addProduct(props.addButton)
        
        }/>
         </S.AlignCounter>
         <div
         
         style={
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }

         }> 
          <S.TotalText>SUBTOTAL</S.TotalText>
          <S.Total>R${(props.price * props.numberProducts).toFixed(2)}</S.Total>
          </div>
    </S.MobileDivLower>
    </S.MobileDivBoth>
    </S.MobileDiv>
  )
}

<S.Line />
  <S.BuyDivDesktop> 
  <S.BuyDiv>
    <S.TotalText>TOTAL</S.TotalText>
    <S.Total>R${(props.price * props.numberProducts).toFixed(2)
    
    }</S.Total>
  </S.BuyDiv>
  <S.Button onClick={clickButton}>Finalizar Compra</S.Button>
  </S.BuyDivDesktop>
    </S.Box>
  );
}
export default CartBox;