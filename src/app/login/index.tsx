import { memo, useState } from 'react';
import PageLayot from '../../components/page-layout';
import styled from 'styled-components';
import Form from '../../components/form';
import FormInput from '../../components/form-input';
import FormLabel from '../../components/form-label';
import FormLink from '../../components/form-link';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

const LoginBox = styled.div`
  max-width: 340px;
  width: 100%;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  text-align: center;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`;

const AccBox = styled.div`
  margin-top: 4em;
  text-align: center;
`;

function Login() {
  const [subjectName, setSubjectName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageLayot>
      <Wrapper>
        <LoginBox>
          <Logo src="../src/assets/images/logo.svg" alt="Логотип Sirius Future" />
          <Form title="Вход в Sirius Future" btnTitle="Войти" onSubmit={handleSubmit} error={error}>
            <FormLabel title="Выбрать предмет" id="subject"></FormLabel>
            <FormInput
              id="subject"
              name="subject"
              placeholder="Выбрать предмет"
              type="text"
              value={subjectName}
              onChange={setSubjectName}
            />
            <FormLabel title="Пароль" id="password"></FormLabel>
            <FormInput
              id="password"
              name="password"
              placeholder="Пароль"
              type="password"
              value={password}
              onChange={setPassword}
            />
            <FormInput
              id="remember"
              name="remember"
              type="checkbox"
              checked={checked}
              onChange={setChecked}
            />
            <FormLabel title="Запомнить меня" id="remember"></FormLabel>
          </Form>
          <LinkBox>
            <FormLink link="/passRemember" name="Я забыл пароль"></FormLink>
            <FormLink link="/loginAsCoach" name="Войти как тренер"></FormLink>
          </LinkBox>
          <AccBox>
            <p>Нет аккаунта?</p>
            <FormLink link="/register" name="Зарегистрироваться"></FormLink>
          </AccBox>
        </LoginBox>
      </Wrapper>
    </PageLayot>
  );
}

export default memo(Login);
