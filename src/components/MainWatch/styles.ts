import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60vh;
  padding: 0 120px;
  margin: 0 0 30px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  overflow: hidden;
  position: relative;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const WatchInfoArea = styled.div`
  width: 45%;
  padding: 24px;
  border-radius: 16px;
  z-index: 100;
  background: ${(props) => props.theme.colors.tertiary};
  transition: ease all 0.2s;
  @media (max-width: 720px) {
    position: relative;
    width: 200%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: transparent;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  cursor: pointer;

  @media (max-width: 720px) {
    font-size: 24px;
  }
`;

export const InfoArea = styled.div`
  display: flex;
  margin: 8px 0;
  gap: 12px;
`;

export const MoreInfo = styled.a`
  width: 156px;
  height: 32px;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.warning};
  border-radius: 4px;
  cursor: pointer;
  opacity: 1;
  transition: ease all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Year = styled.span`
  width: 48px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.info};
  border-radius: 4px;
`;

export const VoteAverage = styled.span<{ voteAverage: boolean }>`
  width: 32px;
  height: 32px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.voteAverage === true
      ? (props) => props.theme.colors.success
      : (props) => props.theme.colors.info};
  border-radius: 4px;
`;

export const Overview = styled.h5`
  width: 80%;
  margin-top: 18px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Poster = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 400%;
    position: relative;
    top: 0;
    justify-content: center;
  }
  > img {
    position: relative;
    width: 100%;
  }
`;
