import { memo } from 'react';
import styled from 'styled-components';
import ScheduleListItem from './schedule-list-item';
import ScheduleListItemProps from './module';

const Wrapper = styled.div`
  width: 100%;
`;

const List = styled.ul`
  list-style-type: none;
  max-height: 174px;
  margin-bottom: 36px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 80px;
    padding-left: 20px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #eeeeff;
  }
`;

const BalanceList = [
  {
    title: 'Ментальная Арифметика',
    count: 32,
    id: 0,
  },
  {
    title: 'Программирование',
    count: 0,
    id: 1,
  },
  {
    title: 'Скорочтение',
    count: 4,
    id: 2,
  },
  {
    title: 'Таблица умножения',
    count: 1,
    id: 3,
  },
  {
    title: 'Подготовка к школе',
    count: 5,
    id: 4,
  },
];

function ScheduleList() {
  return (
    <Wrapper>
      <List>
        {BalanceList.map((item: ScheduleListItemProps) => (
          <ScheduleListItem key={item.id} item={item} />
        ))}
      </List>
    </Wrapper>
  );
}

export default memo(ScheduleList);
