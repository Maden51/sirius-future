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

type ScheduleListProps = {
  list: ScheduleListItemProps[];
};

function ScheduleList({ list }: ScheduleListProps) {
  return (
    <Wrapper>
      <List>
        {list.map((item) => (
          <ScheduleListItem key={item.id} item={item} />
        ))}
      </List>
    </Wrapper>
  );
}

export default memo(ScheduleList);
