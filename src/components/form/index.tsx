import React from 'react';
import { memo } from 'react';
import styled from 'styled-components';

type FormProps = {
  title: string;
  error: boolean;
  btnTitle: string;
  children?: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const StyledForm = styled.form`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-top: 2rem;
  color: #323854;
`;

const FormItem = styled.div`
  width: 100%;
  position: relative;

  &:nth-child(2n + 2) {
    margin-top: 0.75em;
  }
`;

const StyledButton = styled.button`
  max-width: 339px;
  width: 100%;
  background-color: #8d7fc7;
  color: #fff;
  padding: 0.85rem 0.25rem;
  text-align: center;
  font-family: 'CircleRounded-Regular';
  font-weight: bold;
  font-size: 1.125rem;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  margin-top: 2em;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #6e629d;
  }
`;

function Form(props: FormProps) {
  return (
    <StyledForm onSubmit={props.onSubmit}>
      <Title>{props.title}</Title>
      {React.Children.map(props.children, (child: any) => (
        <FormItem key={child.key}>{child}</FormItem>
      ))}
      <StyledButton>{props.btnTitle}</StyledButton>
    </StyledForm>
  );
}

export default memo(Form);
