import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type FormLinkProps = {
  link: string;
  name: string;
};

const StyledLink = styled(Link)`
  color: #008aff;
  line-height: 135%;
  text-decoration: none;

  &:hover {
    color: #0f60a7;
  }
`;

function FormLink(props: FormLinkProps) {
  return <StyledLink to={props.link}>{props.name}</StyledLink>;
}

export default memo(FormLink);
