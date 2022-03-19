import styled from "styled-components";

function input() {
  return (
    <>
      <Wrapper>
        <Form>
          <InputWrapper>
            <Input type="email" placeholder="" required />
            <LabelName>Email Address</LabelName>
            <TopBorder />
            <LeftBorder />
            <RightBorder />
            <BottomBorder />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder=" "
              minlength="10"
              aria-describedby="password-minlength"
              required
            />
            <LabelName>Password</LabelName>
            <TopBorder />
            <LeftBorder />
            <RightBorder />
            <BottomBorder />
          </InputWrapper>
        </Form>
      </Wrapper>
    </>
  );
}

export default input;

const LabelName = styled.span`
  position: absolute;
  display: block;
  top: 20%;
  left: 15px;
  color: hsla(183, 6%, 52%, 1);
  font-weight: 500;
  transition: 300ms;
  pointer-events: none;
  z-index: 10;
  opacity: 1;
`;

const Wrapper = styled.div`
  /* Isolation isolate creates a stacking context */
  isolation: isolate;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  height: 300px;
  background-color: hsla(250, 81%, 73%, 1);
  margin: auto;
  display: grid;
  place-items: center;
  /* This z-index is relative to it's children, all child elements with a z-index above -9999 will sit above the container. */
  z-index: -9999;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// TopBorder animated with clip path on hover
const TopBorder = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(210, 29%, 24%, 1);
  clip-path: polygon(0 0, 0% 0, 0% 10%, 0 10%);
  transition: clip-path 400ms;
  will-change: transform;
`;

// Left Border animated with clip path on hover
const LeftBorder = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(210, 29%, 24%, 1);
  clip-path: polygon(0 0, 0% 0, 0% 10%, 0 10%);
  transition: clip-path 400ms;
  will-change: transform;
`;
// Right Border animated with clip path on hover
const RightBorder = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(210, 29%, 24%, 1);
  clip-path: polygon(99% 100%, 100% 100%, 100% 100%, 99% 100%);
  transition: clip-path 400ms;
  will-change: transform;
`;
// Bottom Border animated with clip path on hover
const BottomBorder = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(210, 29%, 24%, 1);
  clip-path: polygon(100% 90%, 100% 90%, 100% 100%, 100% 100%);
  transition: clip-path 400ms;
  will-change: transform;
`;

const InputWrapper = styled.div`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  transition: transform 300ms ease-out;

  /* Scales input on hover */
  &:hover {
    transform: scale(1.2);
  }

  /* Animates top border from top-right to top-left */
  &:hover ${TopBorder} {
    clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%);
  }

  /* Animates left border from top-right to bottom-left */
  &:hover ${LeftBorder} {
    clip-path: polygon(0 0, 1% 0, 1% 100%, 0 100%);
  }

  /* Animates right border from top-right to bottom-right */
  &:hover ${RightBorder} {
    clip-path: polygon(99% 0, 100% 0, 100% 100%, 99% 100%);
  }

  /* Animates right border from bottom-right to bottom-left */
  &:hover ${BottomBorder} {
    clip-path: polygon(0 95%, 100% 95%, 100% 100%, 0% 100%);
  }
`;

const Input = styled.input`
  position: relative;
  line-height: normal;
  width: 200px;
  height: 40px;
  border: none;
  box-shadow: var(--form-shadow-elevation-medium);
  padding-inline-start: 15px;

  /* Removed for demo purposes, I am aware this is not best practice for accessibility reasons */
  &:active,
  :focus {
    outline: none;
  }

  &:valid {
    color: hsla(145, 63%, 42%, 1);
  }

  &:focus ~ ${LabelName} {
    transform: scale(0.7) translate(-40px, -40px);
    color: white;
  }

  &:valid ~ ${LabelName} {
    opacity: 0;
  }
`;
