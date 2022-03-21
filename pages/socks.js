import styled from "styled-components";
import Image from "next/image";
import Breadcumbs from "../components/products/Breadcumbs";
import { newItemAlert } from "../utils/dateRange";
const apparelEndpoint = "https://www.allbirds.com/products.json?limit=100";

function socks({ data }) {
  const results = data.products;

  const filteredResults = results.filter((apparel) => {
    return apparel.product_type === "Socks";
  });

  console.log(filteredResults);
  return (
    <>
      <BreadcumbWrapper>
        <Breadcumbs />
      </BreadcumbWrapper>
      <Wrapper>
        <GridWrapper>
          <h1>Socks</h1>
          <GridParent>
            {filteredResults.map((res) => {
              const { published_at, id, images, title, variants, options } =
                res;
              return (
                <GridItemAnchor key={id}>
                  <ImageWrapper>
                    <Image src={images[0].src} alt="title" layout="fill" />
                  </ImageWrapper>
                  <ProductWrapper>
                    {variants.map((sale) => {
                      const { id } = sale;
                      if (sale.compare_at_price != null) {
                        return <SalePill key={id}>Sale!</SalePill>;
                      }
                    })}
                    <ProductName>{title}</ProductName>
                    {newItemAlert(published_at) < 7 ? (
                      <NewPill>New</NewPill>
                    ) : null}
                  </ProductWrapper>
                  {variants.map((sale) => {
                    const { id } = sale;
                    if (sale.compare_at_price != null) {
                      return <SalePill key={id}>Sale!</SalePill>;
                    }
                  })}

                  <ProductPrice>
                    {` `} &#36;{variants[0].price}
                  </ProductPrice>

                  <ProductStyle>
                    Available sizes:{" "}
                    {/* {variants.map((item) => {
                      if (!item.available) {
                        console.log("NoSocks");
                        return <Available>{item.title}</Available>;
                      } else {
                        console.log("SOCKS!");
                        return <Available>{item.title}</Available>;
                      }
                    })} */}
                    {variants.map((sizes, id) => {
                      if (sizes.available === false) {
                        return (
                          <Unavailable key={id}>{sizes.title}</Unavailable>
                        );
                      } else if (sizes.available === true) {
                        return <Available key={id}>{sizes.title}</Available>;
                      }
                    })}
                  </ProductStyle>
                </GridItemAnchor>
              );
            })}
          </GridParent>
        </GridWrapper>
      </Wrapper>
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

const Wrapper = styled.div`
  background-color: hsla(0, 0%, 100%, 1);
`;

const GridWrapper = styled.div`
  max-width: 80rem;
  margin: auto;
  padding-block: 2rem;
  padding-inline: 1rem;
  overflow: hidden;

  @media (min-width: 640px) {
    padding-block: 2rem;
    padding-inline: 1.5rem;
  }

  @media (min-width: 1024px) {
  }
`;

const GridParent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 2.5rem;
  column-gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2rem;
  }
`;

const GridItemAnchor = styled.a`
  position: relative;
  font-size: 1rem;
  line-height: 1.25rem;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  background-color: hsla(19, 34%, 96%, 1);
  transition: transform 300ms ease-in-out;

  &:hover {
    opacity: 0.95;
    transform: scale(1.025);
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-start: 1rem;
  font-weight: 500;
`;

const ProductName = styled.p`
  color: hsla(221, 41%, 11%, 1);
`;

const ProductPrice = styled.p`
  color: hsla(219, 7%, 51%, 1);
  font-size: 1rem;
`;

const ProductStyle = styled.p`
  color: hsla(219, 7%, 51%, 1);
  font-size: 0.85rem;
`;
const SalePill = styled.span`
  position: absolute;
  top: 10px;
  display: grid;
  justify-content: center;
  max-width: 50px;
  padding-inline: 0.85rem;
  padding-block: 0.125rem;
  background-color: hsla(40, 16%, 84%, 1);
  /* border-radius: 9999px; */
  color: hsla(36, 2%, 47%, 1);
  font-weight: 500;
  font-size: 0.75rem;
`;

const NewPill = styled.span`
  display: grid;
  justify-content: center;
  max-width: 50px;
  max-height: 25px;
  padding-inline: 0.5rem;
  padding-block: 0.125rem;
  background-color: hsla(163, 30%, 75%, 0.5);
  border-radius: 4px;
  color: var(--color-secondary);
  font-weight: 500;
  font-size: 0.75rem;
`;

const Unavailable = styled.span`
  display: inline-block;
  color: hsla(352, 84%, 59%, 1);
  font-size: 0.85rem;
  text-decoration: line-through;
  margin-inline: 0.25rem;
  opacity: 0.5;
`;
const Available = styled.span`
  display: inline-block;
  color: var(--color-secondary);
  font-size: 0.85rem;

  margin-inline: 0.25rem;
`;
