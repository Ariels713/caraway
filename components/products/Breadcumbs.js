import styled from "styled-components";
import Slash from "./Slash";
import Link from "next/link";
function Breadcumbs() {
  return (
    <>
      <Nav>
        <OrderedList role="list">
          <li>
            <AnchorWrapper>
              <Link href="/apparel" passHref>
                <Anchor>Apparel</Anchor>
              </Link>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Link href="/shoes" passHref>
                <Anchor>Shoes</Anchor>
              </Link>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Link href="/socks" passHref>
                <Anchor>Socks</Anchor>
              </Link>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Link href="/underwear" passHref>
                <Anchor>Underwear</Anchor>
              </Link>
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
  cursor: pointer;
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
