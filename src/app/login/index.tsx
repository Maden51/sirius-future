import { memo, useState } from 'react';
import PageLayot from '../../components/page-layout';
import styled from 'styled-components';
import Form from '../../components/form';
import FormInput from '../../components/form-input';
import FormLabel from '../../components/form-label';
import FormLink from '../../components/form-link';
import useTranslate from '../../hooks/use-translate';
import LocaleSelect from '../../components/locale-select';

const Wrapper = styled.div`
  display: grid;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  width: 340px;
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
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { t }: any = useTranslate();

  return (
    <PageLayot>
      <Wrapper>
        <LoginBox>
          <Logo src="../src/assets/images/logo.svg" alt="Логотип Sirius Future" />
          <Form title={t('title')} btnTitle={t('login.btn')} onSubmit={handleSubmit} error={error}>
            <FormLabel title="Выбрать предмет" id="subject"></FormLabel>
            <FormInput
              id="subject"
              name="subject"
              placeholder={t('login.subject')}
              type="text"
              value={subjectName}
              onChange={setSubjectName}
            />
            <FormLabel title="Пароль" id="password"></FormLabel>
            <FormInput
              id="password"
              name="password"
              placeholder={t('login.password')}
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
            <FormLink link="/passRemember" name={t('login.forgotPassword')}></FormLink>
            <FormLink link="/loginAsCoach" name={t('login.coach')}></FormLink>
          </LinkBox>
          <AccBox>
            <p>{t('login.noAcc')}</p>
            <FormLink link="/register" name={t('login.register')}></FormLink>
          </AccBox>
        </LoginBox>
        <LocaleSelect />
      </Wrapper>
    </PageLayot>
  );
}

export default memo(Login);
