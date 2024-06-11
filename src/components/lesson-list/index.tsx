import { memo } from 'react';
import styled from 'styled-components';
import LessonListItem from './lesson-list-item';
import LessonListitem from './lesson-list-item/module';

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

type LessonListProps = {
  list: LessonListitem[];
};

function LessonList({ list }: LessonListProps) {
  return (
    <Wrapper>
      <List>
        {list.map((item) => (
          <LessonListItem key={item.id} item={item} />
        ))}
      </List>
    </Wrapper>
  );
}

export default memo(LessonList);
