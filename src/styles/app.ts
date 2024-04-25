import styled from "styled-components"
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2F2E41;
  color: #FFFFFF;
  height: 90vh;
`
export const MovieDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (min-width: 768px) {
    width: 75%;
    

  
  }

`
