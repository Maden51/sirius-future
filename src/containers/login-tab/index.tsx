import { memo } from 'react';
import styled from 'styled-components';
import chatIcon from '../../assets/images/Chat.svg';
import userAvatar from '../../assets/images/avatar.png';
import LoginTabArrow from '../../svg/loginTab-arrow';
import ModalLayout from '../../components/modal-layout';

const Wrapper = styled.section`
  position: relative;
  max-width: 1154px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75em 3em 0.75em 2em;
  border-bottom-left-radius: 1.2em;
  border-bottom-right-radius: 1.2em;
  box-shadow: 0 1px 13px -2px #8f8fb7e4;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--dark-gray);
`;

const TitleName = styled(Title)`
  display: inline-block;
  color: var(--dark-violet);
`;

const LogActions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const ChatBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  border: 1px solid var(--dark-violet);
`;

const UserBox = styled(ChatBox)`
  margin-left: 1rem;
  cursor: pointer;
`;

const UserAvatar = styled.img``;

const ChatIcon = styled.img`
  cursor: pointer;
  transition: scale 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`;

const UserArrow = styled.div`
  margin-left: 0.55em;
  cursor: pointer;
`;

const MessageCount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  border-radius: 10px;
  width: 16px;
  height: 16px;
  font-size: 0.6rem;
  background: #e84849;
  font-weight: bold;
  color: #fff;
  top: -2.5px;
  right: -2.5px;
`;

function LoginTab() {
  return (
    <Wrapper>
      <Title>
        Добро пожаловать, <TitleName>Михаил</TitleName>!
      </Title>
      <LogActions>
        <ChatBox>
          <ChatIcon src={chatIcon} alt="Иконка чата" />
          <MessageCount>2</MessageCount>
        </ChatBox>
        <UserBox>
          <UserAvatar src={userAvatar} alt="Фото профиля" />
        </UserBox>
        <UserArrow>
          <LoginTabArrow />
        </UserArrow>
        <ModalLayout />
      </LogActions>
    </Wrapper>
  );
}

export default memo(LoginTab);
