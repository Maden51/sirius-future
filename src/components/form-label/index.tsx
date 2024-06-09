import { memo } from 'react';
import styled from 'styled-components';

const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
`;

const ShowedLabel = styled.label`
  font-size: 0.75rem;
`;

type FormLabelProps = {
  title: string;
  id: string;
  hidden?: boolean;
};

function FormLabel(props: FormLabelProps) {
  return (
    <>
      {props.hidden ? (
        <HiddenLabel htmlFor={props.id}>{props.title}</HiddenLabel>
      ) : (
        <ShowedLabel htmlFor={props.id}>{props.title}</ShowedLabel>
      )}
    </>
  );
}

export default memo(FormLabel);
