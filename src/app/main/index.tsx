import { memo } from 'react';
import PageLayot from '../../components/page-layout';
import LoginTab from '../../containers/login-tab';
import styled from 'styled-components';
import Navigation from '../../containers/navigation';
import advBg from '../../assets/images/big-gift.png';
import Timer from '../../components/timer';
import InfoBox from '../../components/info-box';
import homeWork from '../../assets/images/homework.svg';
import report from '../../assets/images/report.svg';
import MainBox from '../../components/main-box';
import ScheduleList from '../../components/schedule-list';
import LessonListItem from '../../components/lesson-list-item';

const MainWrapper = styled.main`
  width: 100%;
`;

const Wrapper = styled.section`
  display: flex;
`;

const MainContent = styled.section`
  margin-top: 20px;
  margin-left: 2rem;
`;

const AdvBox = styled.div`
  max-width: 526px;
  width: 100%;
  border-radius: 30px;
  background: var(--dark-violet);
  padding: 3.5rem 2.5rem;
  color: white;
  background-image: url('${advBg}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;

const AdvBoxTitle = styled.h3`
  max-width: 366px;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 12px;
`;

const AdvBoxContent = styled.div`
  font-weight: 300;
  max-width: 294px;
`;

const Row = styled.div<{ $marginTop?: string }>`
  margin-top: ${(props) => props.$marginTop};
  display: flex;
  gap: 1.25em;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

function Main() {
  return (
    <PageLayot>
      <Wrapper>
        <Navigation />
        <MainWrapper>
          <LoginTab />
          <MainContent>
            <Row>
              <AdvBox>
                <AdvBoxTitle>До 31 декабря любой курс со скидкой 20%</AdvBoxTitle>
                <AdvBoxContent>
                  До конца года у вас есть уникальная возможность воспользоваться нашей новогодней
                  скидкой 20% на любой курс!
                </AdvBoxContent>
              </AdvBox>
              <Timer />
              <Col>
                <InfoBox title="Домашние задания" bg="#D8ECFF" icon={homeWork} />
                <InfoBox title="Отчёты от учителей" bg="#E8CBFF" icon={report} />
              </Col>
            </Row>
            <Row $marginTop="1.5rem">
              <MainBox
                title="Баланс занятий"
                btnTitle="Button"
                maxWidth="344px"
                btnMaxWidth="288px">
                <ScheduleList />
              </MainBox>
              <MainBox
                title="Ближайшие уроки"
                btnTitle="Button"
                maxWidth="708px"
                btnMaxWidth="344px">
                <LessonListItem />
                <LessonListItem />
                <LessonListItem />
              </MainBox>
            </Row>
          </MainContent>
        </MainWrapper>
      </Wrapper>
    </PageLayot>
  );
}

export default memo(Main);
