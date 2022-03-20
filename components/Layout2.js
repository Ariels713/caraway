import Breadcumbs from "./products/Breadcumbs";
import styled from "styled-components";
const Layout2 = ({ children }) => {
  return (
    <>
      <BreadcumbWrapper>
        <Breadcumbs />
      </BreadcumbWrapper>
      <main>{children}</main>
    </>
  );
};
export default Layout2;

const BreadcumbWrapper = styled.div`
  display: grid;
  place-content: center;
  padding-block: 2rem;
`;
