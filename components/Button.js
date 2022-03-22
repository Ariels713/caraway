import styled from "styled-components";

function Button() {
  return (
    <>
      <ButtonWrapper>
        <ButtonBase role="button">Add To Cart</ButtonBase>
      </ButtonWrapper>
    </>
  );
}

export default Button;

const ButtonWrapper = styled.div`
  /* Isolation isolate creates a stacking context */
  isolation: isolate;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  height: 300px;
  background-color: hsla(77, 91%, 61%, 1);
  margin: auto;
  display: grid;
  place-items: center;
  /* This z-index is relative to it's children, all child elements with a z-index above -9999 will sit above the container. */
  z-index: -9999;
`;

const ButtonBase = styled.button`
  position: relative;
  background-color: hsla(223, 17%, 25%, 1);
  box-shadow: var(--shadow-elevation-medium);
  border: none;
  color: hsla(77, 91%, 61%, 1);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding-inline: 1.75em;
  padding-block: 0.75em;
  border-radius: 9999px;
  text-decoration: none;
  text-transform: uppercase;
  /* Adding preseve-3d presrves stacking order on transforms */
  transform-style: preserve-3d;
  transition: transform 300ms ease-in-out, color 300ms ease-in-out,
    background-color 300ms ease-in-out;
  &:hover {
    transform: translate(10px, 10px);
    background-color: hsla(243, 23%, 97%, 1);
    color: hsla(222, 16%, 25%, 1);
  }

  &::after {
    position: absolute;
    left: 10px;
    top: 11px;
    background-color: hsla(216, 33%, 97%, 1);
    border-radius: 9999px;
    content: "";
    display: block;
    height: 48px;
    width: 100%;
    transition: left 300ms ease-in-out, top 300ms ease-in-out,
      background-color 300ms ease-in-out;
    /* Used to keep pseudo-class element behind the button  */
    transform: translateZ(-1em);
  }

  &:hover::after {
    left: -10px;
    top: -11px;
    background-color: hsla(226, 17%, 25%, 1);
  }
`;
