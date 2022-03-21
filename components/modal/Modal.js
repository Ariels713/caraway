import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Backdrop from '../backdrop/Backdrop'

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

function Modal({ handleClose, data, index }) {
  // console.log('data from props', data[index].title)
  // console.log(index)
  let desc = data.body_html

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
        <div className='product'>
          <div className='product-img'>
            <Image src={data[index].images[3].src} alt='' layout='fill' />
          </div>
          <div className='product-listing'>
            <div className='content'>
              <div className='content-display'>
                <h1 className='name'>{data[index].title}</h1>
                <p className='info'>
                  {data[index].body_html.replace(
                    /(<p[^>]+?>|<p>|<\/p>)/gim,
                    ''
                  )}
                </p>
              </div>
              <div className='btn-and-rating-box'>
                <p className='price'>&#36; {data[index].variants[0].price}</p>
                <button className='btn'>buy now</button>
              </div>
              <ProductStyle>
                Available sizes:{' '}
                {data[index].variants.map((sizes, id) => {
                  if (sizes.available === false) {
                    return <Unavailable key={id}>{sizes.title}</Unavailable>
                  } else if (sizes.available === true) {
                    return <Available key={id}>{sizes.title}</Available>
                  }
                })}
              </ProductStyle>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  )
}

export default Modal

const ProductStyle = styled.p`
  color: hsla(219, 7%, 51%, 1);
  font-size: 0.85rem;
`
const Unavailable = styled.span`
  display: inline-block;
  color: hsla(352, 84%, 59%, 1);
  font-size: 0.85rem;
  text-decoration: line-through;
  margin-inline: 0.25rem;
  opacity: 0.5;
`
const Available = styled.span`
  display: inline-block;
  color: var(--color-secondary);
  font-size: 0.85rem;

  margin-inline: 0.25rem;
`
