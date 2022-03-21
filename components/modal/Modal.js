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
  console.log('data', data)
  console.log('index', index)
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
            {/* <Image src={data[0].images[0].src} alt='' layout='fill' /> */}
          </div>
          <div className='product-listing'>
            <div className='content'>
              <div className='content-display'>
                <h1 className='name'>leather bag</h1>
                <p className='info'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque laborum optio natus quibusdam ea nam odit vitae id
                  unde officia.
                </p>
              </div>
              <div className='btn-and-rating-box'>
                <p className='price'>$ 299</p>
                <button className='btn'>buy now</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
