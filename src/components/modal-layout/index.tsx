import { memo } from 'react';
import styled from 'styled-components';
import closeBtn from '../../assets/images/Close.svg';
import ModalClose from '../../svg/modal-close';

const Layout = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 30px;
  border: 1px solid var(--dark-violet);
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  border-radius: 12px;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  border: none;
  background: transparent;
`;

function ModalLayout() {
  return (
    <Layout>
      <CloseBtn>
        <ModalClose />
      </CloseBtn>
    </Layout>
  );
}

export default memo(ModalLayout);
