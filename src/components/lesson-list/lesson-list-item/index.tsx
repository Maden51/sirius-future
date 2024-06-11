import { memo } from 'react';
import styled from 'styled-components';
import teacherIcon from '../../../assets/images/teacher-icon.svg';
import LessonListitem from './module';

const StyledDiv = styled.div`
  padding: 10px 0;
  padding-right: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: var(--dark-gray);

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

const StyledData = styled.div`
  font-size: 2rem;
  line-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledDataText = styled(StyledData)`
  font-size: 0.75rem;
  line-height: 135%;
`;

const StyledTitle = styled.div`
  line-height: 135%;
  margin-left: 1rem;
  width: 30%;
`;

const StyledTime = styled(StyledDataText)`
  margin-left: 1.5rem;
  margin-right: 1rem;
`;

const StyledTeacherIcon = styled.img`
  margin-right: 5px;
  margin-bottom: 2px;
`;

const StyledTeacher = styled.div`
  font-size: 0.75rem;
  font-weight: 300;
`;

const StyledControls = styled.div`
  margin-left: auto;
  display: flex;
  gap: 4px;
`;

const StyledButton = styled.button<{ $color?: string; $bg?: string; $border?: string }>`
  font-size: 0.75rem;
  color: ${(props) => props.$color || '#323854'};
  background: ${(props) => props.$bg || '#FFF'};
  border: 1px solid ${(props) => props.$border || '#8D7FC7'};
  border-radius: 15px;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
`;

type LessonListItemProps = {
  item: LessonListitem;
};

function LessonListItem({ item }: LessonListItemProps) {
  return (
    <StyledDiv>
      <StyledData>
        {/* Добавить компонент и функцию времени */}1<StyledDataText>мая</StyledDataText>
      </StyledData>
      <StyledTitle>{item.title}</StyledTitle>
      <StyledTime>{item.time}</StyledTime>
      <StyledTeacherIcon src={teacherIcon} alt="иконка учителя" />
      <StyledTeacher>{item.teacher}</StyledTeacher>
      <StyledControls>
        <StyledButton>Button</StyledButton>
        <StyledButton $color="#fff" $bg="#8D7FC7" $border="#fff">
          Button
        </StyledButton>
      </StyledControls>
    </StyledDiv>
  );
}

export default memo(LessonListItem);
