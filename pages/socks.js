import styled from 'styled-components'
import Image from 'next/image'
import Breadcumbs from '../components/products/Breadcumbs'

const apparelEndpoint = 'https://www.allbirds.com/products.json?limit=100'

function socks({ data }) {
  const results = data.products

  const filteredResults = results.filter((apparel) => {
    return apparel.product_type === 'Socks'
  })

  console.log(filteredResults)

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
              const { created_at, id, images, product_type, title, variants } =
                res
              return (
                <GridItemAnchor key={id}>
                  <ImageWrapper>
                    <Image src={images[0].src} alt='title' layout='fill' />
                  </ImageWrapper>
                  <ProductWrapper>
                    <ProductName>{title}</ProductName>
                    <ProductPrice>
                      {` `} &#36;{variants[0].price}
                    </ProductPrice>
                  </ProductWrapper>
                  {variants.map((sale) => {
                    const { id } = sale
                    if (sale.compare_at_price != null) {
                      return <SalePill key={id}>Sale!</SalePill>
                    }
                  })}

                  <ProductColor>Cuoio</ProductColor>
                  <ProductStyle>3 Styles Available</ProductStyle>
                </GridItemAnchor>
              )
            })}
          </GridParent>
        </GridWrapper>
      </Wrapper>
    </>
  )
}

export default socks

export async function getServerSideProps() {
  const res = await fetch(apparelEndpoint)

  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

// Styles for Apparels Page
const BreadcumbWrapper = styled.div`
  display: grid;
  place-content: center;
  padding-block: 2rem;
`

const Wrapper = styled.div`
  background-color: hsla(0, 0%, 100%, 1);
`

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
`

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
`

const GridItemAnchor = styled.a`
  position: relative;
  font-size: 1rem;
  line-height: 1.25rem;
  cursor: pointer;
`

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
`

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-start: 1rem;
  font-weight: 500;
`

const ProductName = styled.p`
  color: hsla(221, 41%, 11%, 1);
`

const ProductPrice = styled.p`
  margin-inline-end: 0.5rem;
  color: hsla(221, 41%, 11%, 1);
`

const ProductColor = styled.p`
  color: hsla(219, 7%, 51%, 1);
  font-size: 0.85rem;
  font-style: italic;
`

const ProductStyle = styled.p`
  color: hsla(219, 7%, 51%, 1);
`
const SalePill = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  display: grid;
  justify-content: center;
  max-width: 50px;
  padding-inline: 0.85rem;
  padding-block: 0.125rem;
  background-color: hsla(352, 84%, 59%, 1);
  border-radius: 9999px;
  color: var(--color-primary);
  font-weight: 500;
  font-size: 0.75rem;
`
