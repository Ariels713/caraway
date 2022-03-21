import styled from "styled-components";
import Socks from "../components/apparel/Socks";

import Breadcumbs from "../components/products/Breadcumbs";

const apparelEndpoint = "https://www.allbirds.com/products.json?limit=100";

function socks({ data }) {
  const results = data.products;

  const filteredResults = results.filter((apparel) => {
    return apparel.product_type === "Socks";
  });
  return (
    <>
      <BreadcumbWrapper>
        <Breadcumbs />
      </BreadcumbWrapper>
      <Socks data={filteredResults} />
    </>
  );
}

export default socks;

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
