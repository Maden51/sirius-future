import { memo } from 'react';
import PageLayot from '../../components/page-layout';
import LoginTab from '../../containers/login-tab';
import styled from 'styled-components';
import Navigation from '../../containers/navigation';

const MainContent = styled.main`
  width: 100%;
`;

const Wrapper = styled.section`
  display: flex;
`;

function Main() {
  return (
    <PageLayot>
      <Wrapper>
        <Navigation />
        <MainContent>
          <LoginTab />
        </MainContent>
      </Wrapper>
    </PageLayot>
  );
}

export default memo(Main);
