import React, { DetailedHTMLProps, HTMLAttributes, memo } from 'react';
import styled from 'styled-components';
import checkbox from '../../assets/icons/checkbox.png';

type FormCheckboxProps = {
  disabled?: boolean;
  type: string;
  id: string;
  name: string;
  checked: boolean;
  label: string;
  onChange: (isChecked: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = styled.div`
  display: table-cell;
`;

const CheckBoxContainer = styled.div`
  background-color: transparent;
  border: 1px solid #c8c5cd;
  border-radius: 2px;
  height: 16px;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    @extend .focus-visible;
  }
`;

const CheckBoxInput = styled.input.attrs({
  type: 'checkbox',
})`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckBoxLabel = styled.div`
  margin-left: 0.25em;
  font-size: 0.75em;
  line-height: 135%;
  color: #79747f;
`;

function FormCheckbox(props: FormCheckboxProps) {
  const onChange = () => {
    props.onChange(!props.checked);
  };

  const onEnterPress = (e: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      props.onChange(!props.checked);
    }
  };

  return (
    <CheckBox>
      <Label>
        <CheckBoxContainer role="input" tabIndex={0} onKeyDown={onEnterPress}>
          <CheckBoxInput onChange={onChange} tabIndex={-1} />
          {props.checked && <img src={checkbox} alt="" />}
        </CheckBoxContainer>
        {props.label && <CheckBoxLabel>{props.label}</CheckBoxLabel>}
      </Label>
    </CheckBox>
  );
}

export default memo(FormCheckbox);
