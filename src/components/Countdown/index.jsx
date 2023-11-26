import styled from 'styled-components';

export const Countdown = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const CountdownItem = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background: #333333;
  color: #ffffff;
  margin: 0 15px;
  font-size: 3em;
  font-weight: 500;

  &::before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 35px;
    background: #ffff00;
    color: #333333;
    font-size: .35em;
    line-height: 35px;
    font-weight: 300;
  }

  &#day:before {
    content: 'Days';
  }

  &#hour:before {
    content: 'Hours';
  }

  &#minute:before {
    content: 'Minutes';
  }

  &#second:before {
    content: 'Seconds';
  }
`;
