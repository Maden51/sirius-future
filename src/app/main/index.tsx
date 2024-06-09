import { memo } from 'react';
import PageLayot from '../../components/page-layout';
import LoginTab from '../../containers/login-tab';
import styled from 'styled-components';

const MainContent = styled.main``;

function Main() {
  return (
    <PageLayot>
      <MainContent>
        <LoginTab />
      </MainContent>
    </PageLayot>
  );
}

export default memo(Main);
