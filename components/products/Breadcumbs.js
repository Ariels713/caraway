import styled from "styled-components";
import Slash from "./Slash";

function Breadcumbs() {
  return (
    <>
      <Nav>
        <OrderedList role="list">
          <li>
            <AnchorWrapper>
              <Anchor>Apperal</Anchor>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Anchor>Shoes</Anchor>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Anchor>Socks</Anchor>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Anchor>Underwear</Anchor>
            </AnchorWrapper>
          </li>
        </OrderedList>
      </Nav>
    </>
  );
}

export default Breadcumbs;

const Nav = styled.nav`
  display: flex;
`;

const OrderedList = styled.ol`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const Anchor = styled.a`
  list-style: none;
  color: var(--color-secondary);
  margin-inline-start: 1rem;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    opacity: 0.75;
  }
`;

const AnchorWrapper = styled.div`
  display: flex;
  align-items: center;
`;
