import styled from "styled-components";
import PropTypes from "prop-types";

function Image({ src, alt, width, height, variant, aspect_ratio, full_width }) {
  let Component;
  if (variant === "base") {
    Component = ImageBase;
  } else if (variant === "full_width") {
    Component = ImageFullWidth;
  } else if (variant === "full_width_aspect_ratio") {
    Component = ImageAspectRatio;
  } else if (variant === "image_grid") {
    Component = ImageGrid;
  } else if (variant === "image_blog") {
    Component = ImageBlog;
  } else {
    throw new Error(
      `Unrecognized Image variant: ${variant}. Head to components/images/imageBase for variants`
    );
  }

  return (
    <>
      <Component
        src={src}
        alt={alt}
        width={width}
        height={height}
        variant={variant}
        aspect_ratio={aspect_ratio}
        full_width={full_width}
      />
    </>
  );
}

const ImageBase = styled.img`
  --ratio-unsupported-height: max(15rem, 25vh);
  aspect-ratio: var(--image-aspect-ratio);
  max-height: var(--image-max-height);
  object-fit: cover;

  @supports not (aspect-ratio: 1) {
    height: var(--ratio-unsupported-height) !important;
  }
`;

const ImageFullWidth = styled(ImageBase)`
  width: 100%;
`;

const ImageAspectRatio = styled(ImageBase)`
  aspect-ratio: ${(props) => props.aspect_ratio};
`;

const ImageGrid = styled(ImageBase)`
  aspect-ratio: ${(props) => props.aspect_ratio};
`;

const ImageBlog = styled(ImageBase)`
  --image-max-height: 60vh;
  width: ${(props) => props.full_width};
  justify-self: center;
  grid-column: main;
  margin: 4vh 0;
`;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Image;
