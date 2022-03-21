import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Backdrop from '../backdrop/Backdrop'
import { RadioGroup } from '@headlessui/react'

const openModal = {
  hidden: {
    transform: 'scale(0)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: ' scale(1)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0)',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

function Modal({ handleClose, data }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='modal '
        variants={openModal}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {/* <Wrapper>
          <div>
            <ImageWrapper>
              <ImageContainer>
                <Image src={data[0].images[1].src} alt='' layout='fill' />
              </ImageContainer>
            </ImageWrapper>
            <ContentWrapper>
              <div>
                <ProductName>leather bag</ProductName>
                <Descricption>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque laborum optio natus quibusdam ea nam odit vitae id
                  unde officia.
                </Descricption>
                <Price>$ 299</Price>
                <ButtonWrapper>
                  <Button>buy now</Button>
                </ButtonWrapper>
              </div>
            </ContentWrapper>
          </div>
        </Wrapper> */}
        <div class='product'>
          <div class='product-img'>
            <Image src={data[0].images[0].src} alt='' layout='fill' />
          </div>
          <div class='product-listing'>
            <div class='content'>
              <div>
                <h1 class='name'>leather bag</h1>
                <p class='info'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque laborum optio natus quibusdam ea nam odit vitae id
                  unde officia.
                </p>
              </div>
              <div class='btn-and-rating-box'>
                <p class='price'>$ 299</p>
                <button class='btn'>buy now</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  )
}

export default Modal

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 520px;
  height: 350px;
  background: var(--color-primary);
  box-shadow: 5px 5px 15px rgba($rose, 0.5);
  border-radius: 10px;
  /* @media (min-width: 640px) {
    padding-inline: 1.5rem;
    padding-block-start: 2rem;
  }

  @media (min-width: 768px) {
    padding-inline: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-inline: 2rem;
    padding-bottom: 2rem;
  } */
`
/* --screen-small:640px; 
      --screen-medium:768px; 
      --screen-large:1024px;
      --xl-screen:1280px; 
      --2xl-screen: 1536px;  */

const ImageWrapper = styled.div`
  width: 40%;
  height: 500px;
  background: #fff;
  position: relative;
  /* opacity: 0;
  transform: translateY(-50px);
  animation: fade-in 1s forwards 1; */
`
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
`

const ContentWrapper = styled.div`
  width: 60%;
  min-height: 500px;
  height: auto;
  background: #292929;
  padding: 40px;
  display: flex;
  justify-content: center;
  color: #eae3d2;
  /* opacity: 0;
    transform: translateY(50px);
    animation: fade-in 1s forwards 1; */
`

const ProductName = styled.h1`
  font-size: 5rem;
  text-transform: capitalize;
`

const Descricption = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  margin-inline-block: 2rem;
`

const Price = styled.p`
  font-size: 3rem;
  font-weight: 200;
  margin-block-end: 1.5rem;
`
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`

background: #eae3d2;
    color: var(--color-tertiary);
    border: none;
    text-transform: capitalize;
    font-size: 1rem
    padding-inline:.75rem;
    padding-block: 1.25rem;
    padding: 10px 20px;
    cursor: pointer;
`
