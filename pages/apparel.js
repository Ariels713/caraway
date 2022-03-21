import styled from "styled-components";
import Apparel from "../components/apparel/Apparel";
import Breadcumbs from "../components/products/Breadcumbs";
const apparelEndpoint = "https://www.allbirds.com/products.json?limit=100";

function apparel({ data }) {
  return (
    <>
      <BreadcumbWrapper>
        <Breadcumbs />
      </BreadcumbWrapper>
      <Apparel data={data} />
    </>
  );
}

export default apparel;

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
