import { memo } from 'react';
import styled from 'styled-components';

const TimerBox = styled.div`
  max-width: 344px;
  width: 100%;
  background: #fff1cb;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 30px;
  color: var(--dark-gray);
`;

const TimerText = styled.p`
  font-size: 1.25rem;
  max-width: 180px;
`;

const TimerData = styled.div`
  font-size: 2em;
  margin-top: 2rem;
`;

const TimerChar = styled.span`
  font-size: 0.475em;
  &:nth-child(-n + 2) {
    margin-right: 12px;
  }
`;

const TimerBtn = styled.button`
  max-width: 220px;
  width: 100%;
  background: transparent;
  text-align: center;
  border: 1px dashed var(--dark-gray);
  padding: 0.75rem;
  border-radius: 30px;
  margin-top: 32px;
  cursor: pointer;
`;

function Timer() {
  return (
    <TimerBox>
      <TimerText>Следующее занятие начнется через:</TimerText>
      <TimerData>
        6<TimerChar>д</TimerChar> 12<TimerChar>ч</TimerChar> 24<TimerChar>мин</TimerChar>
      </TimerData>
      <TimerBtn>Button</TimerBtn>
    </TimerBox>
  );
}

export default memo(Timer);
