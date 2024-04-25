import styled from "styled-components";

export const Box = styled.div`
  border-radius: 4px;
  display: flex;
  
  padding: 8px;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  color: #2F2E41;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 75%;
  } 
  
  

`;
export const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  background-color: #009EDD;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
  font-size: 12px;
  font-weight: 700;
  &:hover { 
    background-color:  #039B00;
    transition: ease-in-out 0.3s;


  }
  @media (min-width: 768px) {
    width: 25%;
  }
`;
export const Image = styled.img`
  width: 84px;
  height: 102px;
  border-radius: 4px;
  @media (min-width: 768px) {
    width: 91px;
    height: 114px;
  }
`;
export const ThText = styled.th`
  width: 100%;
  text-align: left;
  color: #999999;
  text-transform: uppercase;
  @media (max-width: 768px) {
display:none;  

}
`;
export const CounterBorder = styled.div`
  width: 62px;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
width: 59px;

}
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #999999;
`;
export const BuyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 8px;
  }
`;
export const Total = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color:#2F2E41;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const BuyDivDesktop = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;
export const Text = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color:#2F2E41;
`;
export const TableTitle = styled.th`
  width: 100%;
  text-align: left;
  color: 
#999999;
`;

export const AlignCounter = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
`;

export const TitleDiv = styled.div`
  display: flex;
flex-direction: column;
  width: 100%;
  padding: 8px;
  
`;
export const TitleText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #2F2E41;
  @media (min-width: 768px) {
    font-size: 12px;
  }

`;
export const PriceText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #2F2E41;
`;
export const TotalText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #999999;
  @media (max-width: 768px) {
   font-size: 12px;
  }
`;

export const MobileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileDivUpper = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-around;
align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileDivLower = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileDivBoth = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;