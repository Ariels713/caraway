import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import styled from "styled-components";

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
  const results = data.products;

  const filteredResults = results.filter((apparel) => {
    return apparel.product_type === "Underwear";
  });

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
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8">
          <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
            {/* <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-center object-cover"
            /> */}
            {/* <Image
              src={images[0].src}
              alt="title"
              layout="fill"
              className="nextImageScale"
            /> */}
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
              hi ho
            </h2>

            <section aria-labelledby="information-heading" className="mt-1">
              <p className="font-medium text-gray-900">hi</p>

              {/* Descritption */}
            </section>

            <section aria-labelledby="options-heading" className="mt-8">
              <form>
                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">Size</h4>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  {/* <RadioGroup
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
                  </RadioGroup> */}
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to bag
                </button>

                <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
                  <a
                    href=""
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View full details
                  </a>
                </p>
              </form>
            </section>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;

const Wrapper = styled.div``;
