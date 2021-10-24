import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;

  @media (media-width: 760px) {
    opacity: 1;
  }

  &:hover .arrowNavigate {
    opacity: 1;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0 0 0 30px;
`;

export const ViewAllBtn = styled.a`
  cursor: pointer;
  text-align: center;
  padding-right: 30px;
  @media (max-width: 720px) {
    font-size: 12px;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const List = styled.div<{ w: number; marginLeft: number }>`
  width: ${(props) => props.w}px;
  margin-left: ${(props) => props.marginLeft}px;
  transition: ease all 0.5s;
`;

export const Item = styled.div`
  display: inline-block;
  width: 200px;

  > img {
    width: 100%;
    cursor: pointer;
    border: solid 5px ${(props) => props.theme.colors.tertiary};

    transition: ease all 0.2s;
    transform: scale(0.9);

    &:hover {
      transform: scale(1);
    }
  }
`;

export const Arrow = styled.div`
  position: absolute;
  width: 40px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.primary}DF;
  z-index: 98;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all ease 0.5s;

  @media (max-width: 720px) {
    opacity: 1;
  }

  > svg {
    font-size: 50px;
  }
`;

export const ArrowPrev = styled(Arrow)`
  left: 0;
`;

export const ArrowNext = styled(Arrow)`
  right: 0;
`;
