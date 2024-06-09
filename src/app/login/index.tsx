import { memo, useState } from 'react';
import PageLayot from '../../components/page-layout';
import styled from 'styled-components';
import Form from '../../components/form';
import FormInput from '../../components/form-input';
import FormLabel from '../../components/form-label';
import FormLink from '../../components/form-link';
import useTranslate from '../../hooks/use-translate';
import LocaleSelect from '../../components/locale-select';
import FormCheckbox from '../../components/form-checkbox';
import siriusLogo from '../../assets/images/logo.svg';

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

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`;

const AccBox = styled.div`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
          <LogoBox>
            <Logo src={siriusLogo} alt="Логотип Sirius Future" />
          </LogoBox>
          <Form title={t('title')} btnTitle={t('login.btn')} onSubmit={handleSubmit} error={error}>
            <FormLabel hidden title="Выбрать предмет" id="subject"></FormLabel>
            <FormInput
              id="subject"
              name="subject"
              placeholder={t('login.subject')}
              type="text"
              value={subjectName}
              onChange={setSubjectName}
            />
            <FormLabel hidden title="Пароль" id="password"></FormLabel>
            <FormInput
              id="password"
              name="password"
              placeholder={t('login.password')}
              type="password"
              value={password}
              onChange={setPassword}
            />
            <FormCheckbox
              id="remember"
              name="remember"
              type="checkbox"
              checked={checked}
              onChange={setChecked}
              label={t('login.rememberMe')}
            />
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
