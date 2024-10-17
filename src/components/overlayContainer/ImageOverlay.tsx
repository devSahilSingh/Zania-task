import React from "react";

interface ImageOverlayProps {
  imageSrc: string;
  closeOverlay: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = (props) => {
  const { imageSrc, closeOverlay } = props;
  return (
    <>
      <div className="overlay" onClick={closeOverlay}>
        <div className="overlay-content">
          <img src={imageSrc} className="overlay-image" alt="image-shot" />
        </div>
      </div>
    </>
  );
};

export default ImageOverlay;
