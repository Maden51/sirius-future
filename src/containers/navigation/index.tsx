import { memo } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/FullLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import * as navIcons from '../../svg/navigation-icons';
import advBg from '../../assets/images/gift.png';

const navOptions = [
  {
    title: 'Главная',
    icon: navIcons.MainIcon,
    link: '/',
  },
  {
    title: 'Расписание',
    icon: navIcons.ShceduleIcon,
    link: '/schedule',
  },
  {
    title: 'Оплата',
    icon: navIcons.PaymentIcon,
    link: '/payment',
  },
  {
    title: 'Достижение',
    icon: navIcons.AchievementIcon,
    link: '/achievments',
  },
  {
    title: 'Тренажёры',
    icon: navIcons.TrainingIcon,
    link: '/training',
  },
  {
    title: 'Библиотека',
    icon: navIcons.LibraryIcon,
    link: '/library',
  },
  {
    title: 'Проверка связи',
    icon: navIcons.SupportIcon,
    link: '/support',
  },
  {
    title: 'Настройки',
    icon: navIcons.SetupIcon,
    link: '/setup',
  },
  {
    title: 'Вопросы',
    icon: navIcons.QAIcon,
    link: '/faq',
  },
];

const Wrapper = styled.section`
  max-width: 236px;
  width: 100%;
  border-radius: 30px;
  background: var(--light-violet);
  padding-top: 2.8em;
  padding-bottom: 1.5em;
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  margin-bottom: 2.4em;
`;

const NavBar = styled.nav`
  max-width: 216px;
  width: 100%;
`;

const NavList = styled.ul`
  list-style-type: none;
`;

const NavListItem = styled.li`
  padding-left: 44px;
`;

const NavListIcon = styled.div`
  width: 24px;
  height: 24px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavListLink = styled(Link)`
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--nav-primary);
`;

const AdvBox = styled.div`
  color: var(--dark-gray);
  margin: 3.1rem 0.8rem 0 0.8rem;
  background: #fdfdff;
  border-radius: 15px;
  padding: 1rem 1rem 0.75rem 1rem;
  background-image: url('${advBg}');
  background-repeat: no-repeat;
  background-position: bottom right;
`;

const AdvTitle = styled.h3`
  margin-bottom: 0.25rem;
  font-weight: 400;
`;

const AdvText = styled.p`
  font-weight: 300;
  font-size: 0.625rem;
`;

const AdvBtn = styled.button`
  width: 100%;
  max-width: 68px;
  background: #d8ecff;
  margin-top: 10px;
  padding: 0.5rem;
  font-size: 0.75rem;
  line-height: 135%;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background: #b9d0e6;
  }
`;

function Navigation() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Wrapper>
      <Logo src={logo} alt="Логотип Sirius Future" />
      <NavBar>
        <NavList>
          {navOptions.map((item) => (
            <NavListItem key={item.title}>
              <NavListLink to={item.link}>
                <NavListIcon>{item.icon()}</NavListIcon>
                {item.title}
              </NavListLink>
            </NavListItem>
          ))}
        </NavList>
        <AdvBox>
          <AdvTitle>Учитесь бесплатно</AdvTitle>
          <AdvText>
            Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!
          </AdvText>
          <AdvBtn>Узнать</AdvBtn>
        </AdvBox>
      </NavBar>
    </Wrapper>
  );
}

export default memo(Navigation);
