import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const ImageSwiper = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
    delta: 10,
  });

  useEffect(() => {
    const handleTouchMove = (event) => {
      if (event.cancelable) event.preventDefault();
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div {...swipeHandlers} style={styles.container}>
      <div
        style={{
          ...styles.imageContainer,
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} style={styles.image} />
        ))}
      </div>
      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? "#000" : "#ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    touchAction: "pan-y",
  },
  imageContainer: {
    display: "flex",
    transition: "transform 0.3s ease-in-out",
    width: "100%",
  },
  image: {
    minWidth: "100%",
    height: "auto",
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    margin: "0 5px",
    transition: "background-color 0.3s ease",
  },
};

export default ImageSwiper;
