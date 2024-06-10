import { memo } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div<{ $divBg?: string }>`
  width: 100%;
  max-width: 162px;
  padding: 1rem;
  color: var(--dark-gray);
  display: flex;
  background: ${(props) => props.$divBg};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
`;

const StyledTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 6px;
`;

const StyledIcon = styled.div`
  align-self: flex-end;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
  transition: scale 0.3s ease-in-out;
  &:hover {
    scale: 1.2;
  }
`;

type InfoBoxProps = {
  title: string;
  bg: string;
  icon: string;
};

function InfoBox(props: InfoBoxProps) {
  return (
    <StyledDiv $divBg={props.bg}>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledIcon>
        <img src={props.icon} alt={props.title} />
      </StyledIcon>
    </StyledDiv>
  );
}

export default memo(InfoBox);
