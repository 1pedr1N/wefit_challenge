import { useEffect, useState , useContext} from "react";
import getMovies from "../services/movie";
import {  IProductProps, IProductsResponse } from "@/interfaces/interface.product";
import  { AxiosResponse } from "axios";
import * as S from "../styles/app"
import TopBar from "../components/topBar";
import MovieBox from "../components/boxMovie";
import { CartContext } from "../context/cartContext";

function Home() {
     const [movies, setMovies] = useState<IProductProps[]>([]);
     const { cart, addProduct } = useContext(CartContext);
    
    useEffect(() => {
     getMovies().then((response: AxiosResponse<IProductsResponse>) => setMovies(response.data.products));
    }, [ ]);
  return (
    <S.MainContainer>
    <TopBar amount={cart.length}/>
    <S.MovieDiv> 
    {movies.map((movie) => (  
      <MovieBox img={movie.image} title={movie.title} price={(movie.price)} totalCart={cart.length} addCart={() => addProduct(movie)} 
      /> 
    ))}
    </S.MovieDiv>
    </S.MainContainer>
  );
}

export default Home;
