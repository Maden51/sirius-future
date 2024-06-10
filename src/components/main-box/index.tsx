import { ReactNode, memo } from 'react';
import styled from 'styled-components';

type MainBoxProps = {
  title: string;
  btnTitle: string;
  btnMaxWidth: string;
  maxWidth: string;
  children: ReactNode;
};

const Wrapper = styled.div<{ $divMaxWidth: string }>`
  width: 100%;
  max-width: ${(props) => props.$divMaxWidth};
  border: 1px solid var(--dark-violet);
  padding: 1.75rem 0 1.75rem 1.75rem;
  border-radius: 30px;
  color: var(--dark-gray);
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const Button = styled.button<{ $btnMaxWidth: string }>`
  background: var(--light-violet);
  text-align: center;
  padding: 0.55rem;
  width: 100%;
  border-radius: 30px;
  border: none;
  max-width: ${(props) => props.$btnMaxWidth};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--dark-violet);
  }
`;

function MainBox(props: MainBoxProps) {
  return (
    <Wrapper $divMaxWidth={props.maxWidth}>
      <Title>{props.title}</Title>
      {props.children}
      <Button $btnMaxWidth={props.btnMaxWidth}>{props.btnTitle}</Button>
    </Wrapper>
  );
}

export default memo(MainBox);
