import styled from "styled-components";
import Image from "next/image";

function Socks() {
  return (
    <>
      <Wrapper>
        <GridWrapper>
          <GridParent>
            <GridItemAnchor>
              <ImageWrapper>
                <Image
                  src="https://cdn.shopify.com/s/files/1/1104/4168/products/Grid_On-Body_Tee_Natural_Grey_TrinoXO_Female_02.png?v=1617730985"
                  alt="Galaxy"
                  layout="fill"
                />
              </ImageWrapper>
              <ProductWrapper>
                <ProductName>Royale High</ProductName>
                <ProductPrice>$199</ProductPrice>
              </ProductWrapper>
              <ProductColor>Cuoio</ProductColor>
              <ProductStyle>3 Styles Available</ProductStyle>
            </GridItemAnchor>
          </GridParent>
        </GridWrapper>
      </Wrapper>
    </>
  );
}

export default Socks;

const Wrapper = styled.div`
  background-color: hsla(0, 0%, 100%, 1);
`;

const GridWrapper = styled.div`
  max-width: 80rem;
  margin: auto;
  padding-block: 4rem;
  padding-inline: 1rem;
  overflow: hidden;

  @media (min-width: 640px) {
    padding-block: 6rem;
    padding-inline: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-inline: 2rem;
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

  &:hover {
    opacity: 0.75;
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  margin-inline-end: 0.5rem;
  color: hsla(221, 41%, 11%, 1);
`;

const ProductColor = styled.p`
  color: hsla(219, 7%, 51%, 1);
  font-size: 0.85rem;
  font-style: italic;
`;

const ProductStyle = styled.p`
  color: hsla(219, 7%, 51%, 1);
`;
