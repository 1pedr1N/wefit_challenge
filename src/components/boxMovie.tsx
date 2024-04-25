import * as S from "../styles/boxMovie";
import { IMovie } from "@/interfaces/interface.movieaBox";
import CartIcon from "../assets/Vector2.svg";
const MovieBox = ({ img, title, price, totalCart, addCart }: IMovie) => {
  return (
    <S.Box>
      <S.Image src={img} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Price>R$ {price}</S.Price>
      <S.Button onClick={addCart}>
        <S.IconDiv>
          <img src={CartIcon} /> {totalCart}{" "}
        </S.IconDiv>
        Adicionar ao Carrinho
      </S.Button>
    </S.Box>
  );
};

export default MovieBox;
