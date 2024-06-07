import { memo } from 'react';
import styled from 'styled-components';

const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
`;

type FormLabelProps = {
  title: string;
  id: string;
};

function FormLabel(props: FormLabelProps) {
  return <HiddenLabel htmlFor={props.id}>{props.title}</HiddenLabel>;
}

export default memo(FormLabel);
