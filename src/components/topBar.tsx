import * as S from "../styles/topbar";
import Icon from "../assets/Vector.png";
import { ITopbar } from "@/interfaces/interface.topbar";
import { Link } from "react-router-dom";
const TopBar = ({ amount }: ITopbar) => {
  return (
    <S.TopBar>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <S.Title>WeMovies</S.Title>
      </Link>
      <S.CartDiv>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <S.CartTextDiv>
            <S.CartText>Meu Carrinho</S.CartText>
            <S.CartDesc>{amount} itens</S.CartDesc>
          </S.CartTextDiv>
        </Link>
        <img src={Icon} alt="Carrinho de compras" />
      </S.CartDiv>
    </S.TopBar>
  );
};
export default TopBar;
