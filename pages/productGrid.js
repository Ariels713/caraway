import styled from "styled-components";
import Breadcumbs from "../components/products/Breadcumbs";

function productGrid() {
  return (
    <>
      <BreadcumbWrapper>
        <Breadcumbs />
      </BreadcumbWrapper>
    </>
  );
}

export default productGrid;

const BreadcumbWrapper = styled.div`
  display: grid;
  place-content: center;
  padding-block: 2rem;
`;
