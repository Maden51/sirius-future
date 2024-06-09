import { memo, useMemo } from 'react';
import useTranslate from '../../hooks/use-translate';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  color: var(--light-gray);
  background: transparent;
  cursor: pointer;
  transition: scale 0.3s ease-in;

  &:disabled {
    cursor: default;
    scale: 1.4;
    pointer-events: none;
    color: var(--dark-violet);
  }

  &:hover {
    scale: 1.1;
  }
`;

const LocaleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 8px;
`;

function LocaleSelect() {
  const { lang, setLang }: any = useTranslate();

  const options = {
    lang: useMemo(
      () => [
        { value: 'ru', title: 'RU' },
        { value: 'en', title: 'EN' },
      ],
      [],
    ),
  };

  return (
    <LocaleBox>
      {options.lang.map((item) => (
        <StyledButton
          value={item.value}
          onClick={(event: any) => setLang(event.target.value)}
          key={item.value}
          disabled={item.value === lang ? true : false}>
          {item.title}
        </StyledButton>
      ))}
    </LocaleBox>
  );
}

export default memo(LocaleSelect);
