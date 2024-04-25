import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2F2E41;
  color: #FFFFFF;
  width:100%;
  @media (min-width: 768px) {
    width: 75%;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;
export const CartDiv = styled.div`
display:flex;
align-items:center;
cursor: pointer;
`
export const CartTextDiv = styled.div`



`
export const CartText = styled.div`
 font-size: 14px;
 font-weight: 600;
 color: #FFFFFF;
 @media (max-width: 768px) {
    display: none;
  }
`;

export const CartDesc = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #999999;
  text-align: end;
  `;
