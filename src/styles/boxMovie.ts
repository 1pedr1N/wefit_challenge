import styled from "styled-components";

export const Box = styled.div`
padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  color: #2F2E41;
  width: 328px;
  height: 324px;
  @media (min-width: 768px) {
    width: 338px;
    height: 324px;
  } 
  
  

`;
export const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  width: 75%;
  text-align: center;
`;
export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
export const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  background-color: #009EDD;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  width: 90%;
  height: 40px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover { 
    background-color:  #039B00;
    transition: ease-in-out 0.3s;


  }
`;
export const Image = styled.img`
  width: 147px;
  height: 188px;
  border-radius: 4px;
`;
export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;