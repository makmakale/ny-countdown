import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 8em;
  left: 15em;
  right: 15em;
  bottom: 8em;
  background: url('/images/bg.jpg') fixed center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5em 5em rgba(0, 0, 0, .5), 0 0 0 15em rgba(0, 0, 0, .1);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(255, 255, 255, .9) 10%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
  }
`;
