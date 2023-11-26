import { useRef } from 'react';
import { Container } from '@/components/Container';
import { Title } from '@/components/Title';
import { Countdown, CountdownItem } from '@/components/Countdown';
import { useCountdown } from '@/components/App/App.hooks';
import { nextYear } from '@/constants';

function App() {
  const dayRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useCountdown(dayRef, hourRef, minuteRef, secondRef);

  return (
    <Container>
      <Title><span>Countdown to New Year</span>{nextYear}</Title>
      <Countdown>
        <CountdownItem id="day" ref={dayRef}>NA</CountdownItem>
        <CountdownItem id="hour" ref={hourRef}>NA</CountdownItem>
        <CountdownItem id="minute" ref={minuteRef}>NA</CountdownItem>
        <CountdownItem id="second" ref={secondRef}>NA</CountdownItem>
      </Countdown>
    </Container>
  );
}

export default App;
