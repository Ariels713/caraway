import styled from "styled-components";
import Slash from "../products/Slash";
import NextPage from "./NextPage";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <Nav>
        <OrderedList role="list">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Button onClick={() => paginate(number)} className="page-link">
                {number}
              </Button>
              <NextPage />
            </li>
          ))}
        </OrderedList>
      </Nav>
    </Wrapper>
  );
};

export default Pagination;

const Nav = styled.nav`
  display: flex;
`;

const OrderedList = styled.ol`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  list-style: none;
  border: transparent;
  color: var(--color-secondary);
  margin-inline-start: 1rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: hsla(0, 0%, 100%, 1);
  &:hover {
    opacity: 0.75;
  }
`;

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  padding-block: 2rem;
`;
