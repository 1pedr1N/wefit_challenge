import styled from "styled-components";

export const Box = styled.div`
  border-radius: 4px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  color: #2F2E41;
  width: 100%;
  height: 80vh;
  @media (min-width: 768px) {
    width: 75%;
  } 
  
  

`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  width: 75%;
  text-align: center;
`;
export const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  background-color: #009EDD;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  width: 173px;
  height: 40px;
  font-size: 12px;
  font-weight: 700;
  &:hover { 
    background-color:  #039B00;
    transition: ease-in-out 0.3s;


  }
`;



