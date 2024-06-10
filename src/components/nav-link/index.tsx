import { ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavListIcon = styled.div`
  width: 24px;
  height: 24px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavListLink = styled(Link)`
  max-width: 216px;
  padding: 0.5em 0;
  padding-left: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--nav-primary);
  transition: color 0.3s linear;

  &:hover {
    background-color: var(--dark-violet);
    color: var(--nav-active);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    .iconPath {
      fill: white;
      transition: all 0.3s linear;
    }

    .iconStrokePath {
      stroke: white;
      transition: all 0.3s linear;
    }
  }
`;

const NavListLinkActive = styled(NavListLink)`
  background-color: var(--dark-violet);
  color: var(--nav-active);
  font-weight: bold;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  pointer-events: none;

  .iconPath {
    fill: white;
  }

  .iconStrokePath {
    stroke: white;
  }
`;

type NavLinkProps = {
  title: string;
  link: string;
  icon: ReactNode;
  pathname: string;
};

function NavLink(props: NavLinkProps) {
  return (
    <>
      {props.pathname === props.link ? (
        <NavListLinkActive to={props.link}>
          <NavListIcon>{props.icon}</NavListIcon>
          {props.title}
        </NavListLinkActive>
      ) : (
        <NavListLink to={props.link}>
          <NavListIcon>{props.icon}</NavListIcon>
          {props.title}
        </NavListLink>
      )}
    </>
  );
}

export default memo(NavLink);
