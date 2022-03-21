import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import { RadioGroup } from "@headlessui/react";

const openModal = {
  hidden: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Modal({ handleClose, data }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal "
        variants={openModal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Wrapper>
          <button type="button" onClick={handleClose}>
            <span className="sr-only">Close</span>X
          </button>

          <ModalItemGrid>
            <ImageWrapper>
              <Image src={data[0].images[1].src} alt="title" layout="fill" />
            </ImageWrapper>
            <div className="sm:col-span-8 lg:col-span-7">
              {/* <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                {product.name}
              </h2> */}

              {/* <section aria-labelledby="information-heading" className="mt-1">
                <p className="font-medium text-gray-900">{product.price}</p> */}

              {/* Reviews */}
              {/* <div className="mt-4">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-700">
                      {product.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                    <div className="ml-1 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <div className="hidden ml-4 lg:flex lg:items-center">
                      <span className="text-gray-300" aria-hidden="true">
                        &middot;
                      </span>
                      <a
                        href="#"
                        className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        See all {product.reviewCount} reviews
                      </a>
                    </div>
                  </div>
                </div>
              </section> */}

              {/* <section aria-labelledby="options-heading" className="mt-8">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>

                <form>
  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Color</h4>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedColor,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="p" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.bgColor,
                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div> */}

              {/* Size picker */}
              {/* <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">
                        Size
                      </h4>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-7 gap-2">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            className={({ active, checked }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer focus:outline-none"
                                  : "opacity-25 cursor-not-allowed",
                                active
                                  ? "ring-2 ring-offset-2 ring-indigo-500"
                                  : "",
                                checked
                                  ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                                  : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                                "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                              )
                            }
                            disabled={!size.inStock}
                          >
                            <RadioGroup.Label as="p">
                              {size.name}
                            </RadioGroup.Label>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to bag
                  </button>

                  <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
                    <a
                      href={product.href}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View full details
                    </a>
                  </p>
                </form>
              </section> */}
            </div>
          </ModalItemGrid>
        </Wrapper>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  background-color: var(--color-primary);
  padding-inline: 1rem;
  padding-block-start: 3.5rem;
  padding-block-end: 2rem;
  overflow: hidden;
  box-shadow: var(--shadow-elevation-medium);

  @media (min-width: 640px) {
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
  }
`;
/* --screen-small:640px; 
      --screen-medium:768px; 
      --screen-large:1024px;
      --xl-screen:1280px; 
      --2xl-screen: 1536px;  */

const ModalItemGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1;
  row-gap: 2rem;
  column-gap: 1.5rem;
  align-items: flex-start;

  @media (min-width: 640px) {
    grid-template-columns: 12;
    align-items: center;
  }

  @media (min-width: 1024px) {
    column-gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  overflow: hidden;
  background-color: hsla(19, 34%, 96%, 1);
  background-color: var(--color-tertiary);

  @media (min-width: 640px) {
    grid-column: span 4 / span 4;
  }

  @media (min-width: 1024px) {
    grid-column: span 5 / span 5;
  }
`;
