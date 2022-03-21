import styled from "styled-components";
import Breadcumbs from "../components/products/Breadcumbs";
import Underwear from "../components/apparel/Underwear";

const apparelEndpoint = "https://www.allbirds.com/products.json?limit=100";

function underwear({ data }) {
  return (
    <>
      <BreadcumbWrapper>
        <Breadcumbs />
      </BreadcumbWrapper>
      <Underwear data={data} />
    </>
  );
}

export default underwear;

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
