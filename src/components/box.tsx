import { IBoxProps } from "@/interfaces/interface.box";
import * as S from "../styles/box";

const Box = ({title, image,buttonText, buttonAction}:IBoxProps) => {
  return (
    <S.Box>
      <S.Title>{title}</S.Title>
    <img src={image} alt={title} />
      <S.Button onClick={buttonAction}>{buttonText}</S.Button> 
    </S.Box>
  )
}

export default Box;