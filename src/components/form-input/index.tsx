import { Dispatch, SetStateAction, memo } from 'react';
import styled from 'styled-components';

type FormInputProps = {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
  icon?: string;
  onChange: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<boolean>>;
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

function FormInput(props: FormInputProps) {
  const onChange = (e: any) => {
    props.onChange(e.target.value);
  };

  // useLayoutEffect(() => props.onChange(props.value), [props.value]);

  return (
    <Input
      type={props.type}
      value={props.value}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      onChange={onChange}
    />
  );
}

export default memo(FormInput);
