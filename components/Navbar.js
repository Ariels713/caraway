import Link from "next/link";
import styled from "styled-components";
import Me from "./Me";
function Navbar() {
  return (
    <>
      <Navigation>
        <Link href="/">
          <a>
            <Me />
          </a>
        </Link>
        <ul role="list" className="layout-flex">
          <li>
            <Link href="/button">
              <a>Button</a>
            </Link>
          </li>
          <li>
            <Link href="/input">
              <a>Input</a>
            </Link>
          </li>
          <li>
            <Link href="/productGrid">
              <a>Product Grid</a>
            </Link>
          </li>
        </ul>
      </Navigation>
    </>
  );
}

export default Navbar;

const Navigation = styled.nav`
  background-color: var(--color-primary);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  /* These styles are applied if anchors have no class */
  a:not([class]) {
    text-decoration: none;
    color: var(--color-secondary);
    font-size: 1.25rem;
    font-weight: bold;
    font-family: "Open Sans";
  }
`;
