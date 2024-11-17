import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const ImageSwiper = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for swipe gestures
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

  // Configure swipeable hooks
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swiping with a mouse for debugging on desktops
  });

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
