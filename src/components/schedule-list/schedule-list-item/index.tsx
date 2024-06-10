import { memo } from 'react';
import styled from 'styled-components';
import ScheduleItem from '../module';

const StyledDiv = styled.div`
  padding: 10px 0;
  padding-right: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    background: #eeeeff;
    position: absolute;
    margin-top: 4px;
  }
`;

const Title = styled.div`
  color: var(--dark-gray);
`;

const Count = styled.div`
  font-size: 1.25rem;
  padding-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #eeeeff;
  border-radius: 50px;
`;

type ScheduleListItemProps = {
  item: ScheduleItem;
};

function ScheduleListItem({ item }: ScheduleListItemProps) {
  return (
    <StyledDiv>
      <Title>{item.title}</Title>
      <Count>{item.count}</Count>
    </StyledDiv>
  );
}

export default memo(ScheduleListItem);
