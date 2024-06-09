import { Dispatch, SetStateAction, memo } from 'react';
import styled from 'styled-components';
import PasswordIcon from '../password-icon';

type FormInputProps = {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  icon?: string;
  showPassword?: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  onChange: Dispatch<SetStateAction<string>>;
};

const Input = styled.input`
  width: 100%;
  font-size: 0.75rem;
  line-height: 135%;
  padding: 0.6rem 0;
  color: #323854;
  border-radius: 8px;
  border: 1px solid #ececec;
  background: #fff;
  padding-inline: 10px;
  outline: none;
  cursor: pointer;
`;

const Icon = styled.span`
  position: absolute;
  min-width: 10px;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

function FormInput(props: FormInputProps) {
  const onChange = (e: any) => {
    props.onChange(e.target.value);
  };

  const togglePass = () => {
    props.setShowPassword(!props.showPassword);
  };

  return (
    <>
      <Input
        type={props.showPassword ? 'text' : props.type}
        value={props.value}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={onChange}
      />
      {props.type === 'password' ? (
        <Icon onClick={togglePass}>
          <PasswordIcon show={props.showPassword} />
        </Icon>
      ) : null}
    </>
  );
}

export default memo(FormInput);
