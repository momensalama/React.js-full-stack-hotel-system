// @ts-nocheck
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 8rem 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;

  @media (max-width: 1024px) {
    padding: 3.2rem 3.6rem 4.8rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2.4rem 3.2rem;
  }

  @media (max-width: 480px) {
    padding: 1.6rem 1.8rem 2.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 90rem;
    gap: 2.4rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 2rem;
  }
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
