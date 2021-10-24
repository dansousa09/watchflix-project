import styled from "styled-components";

const notMinimized = `width: 100%;
  height: 90px;
  margin: 0; 
  transition: ease all 0.2s; 
  display: flex; 
  justify-content: center;
  align-items: center; 

  > h1 {
    color: ${(props: any) => props.theme.colors.white};
    font-size: 72px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: pointer;
  }    
  @media (max-width: 720px) {
    > h1 {
      font-size: 50px;
      padding-right: 0px;
      justify-content: center;
    }
  
  ;`;

const minimized = `width: 100%;
  height: 45px;
  margin: 0;
  background-color: rgba(0, 0, 0, .8);
  position: fixed; 
  top: 0; 
  z-index: 101;
  transition: ease all 0.2s;
  display: flex; 
  justify-content: center;
  align-items: center; 

  > h1 {
    color: ${(props: any) => props.theme.colors.white};
    font-size: 32px;
    margin: 0;
    padding-right: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }    

  @media (max-width: 720px) {
    > h1 {
      font-size: 32px;
      padding-right: 0px;
      justify-content: center;
    }
  ;`;

export const Container = styled.div<{ minHeader: boolean }>`
  ${(props) => (props.minHeader ? minimized : notMinimized)}
`;
