import type { FC } from 'react';
import { useTimer } from 'hooks/useTimer';
import TimerBox from './TimerBox';

type Props = { maxCount?: number };
const MAX_COUNT = 60;

const CountdownTimer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
  const [timeLeft, _, reset] = useTimer(maxCount);

  return <TimerBox {...{ timeLeft, reset }} />;
};

export default CountdownTimer;
