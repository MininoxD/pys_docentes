import styled from "styled-components";

export const ContainerRegister = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    div{
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }


`