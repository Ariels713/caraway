import styled from "styled-components";
import Shoes from "../components/apparel/Shoes";

import Breadcumbs from "../components/products/Breadcumbs";

const apparelEndpoint = "https://www.allbirds.com/products.json?limit=100";

function shoes({ data }) {
  return (
    <>
      <BreadcumbWrapper>
        <Breadcumbs />
      </BreadcumbWrapper>
      <Shoes data={data} />
    </>
  );
}

export default shoes;

export async function getServerSideProps() {
  const res = await fetch(apparelEndpoint);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

// Styles for Apparels Page
const BreadcumbWrapper = styled.div`
  display: grid;
  place-content: center;
  padding-block: 2rem;
`;
