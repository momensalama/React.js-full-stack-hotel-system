// @ts-nocheck
import { createContext, useContext } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  min-width: 600px;

  @media (max-width: 700px) {
    min-width: 400px;
    font-size: 1.2rem;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  @media (max-width: 700px) {
    column-gap: 1.2rem;
    padding: 0.8rem 1.2rem;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns: string;
}) {
  return (
    <TableWrapper>
      <TableContext.Provider value={{ columns }}>
        <StyledTable role="table">{children}</StyledTable>
      </TableContext.Provider>
    </TableWrapper>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}
function Row({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
