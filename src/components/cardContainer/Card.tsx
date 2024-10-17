import React, { useState, useEffect } from "react";
import { ICard } from "../../types/Common";
import Loading from "../loader/Loading";
import ImageOverlay from "../overlayContainer/ImageOverlay";
import "./Card.css";

interface CardProps {
  cardItem: ICard;
}

const Card: React.FC<CardProps> = (props) => {
  const { cardItem } = props;
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // handle overlay close on ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOverlayVisible(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleCardClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{cardItem.title}</h3>
        </div>
        {isLoading && <Loading />}
        <img
          src={cardItem.image}
          onClick={handleCardClick}
          alt="image-shot"
          className="card-img-top"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>
      <div>
        {isOverlayVisible && (
          <ImageOverlay
            imageSrc={cardItem.image}
            closeOverlay={handleCloseOverlay}
          />
        )}
      </div>
    </>
  );
};

export default Card;
