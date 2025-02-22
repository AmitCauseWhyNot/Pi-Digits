import React, { useState, useEffect, useCallback } from "react";
import { Button } from "theme-ui";

function useLongPress(callback, delay = 1000) {
  const [isPressing, setIsPressing] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsPressing(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressing(false);
  }, []);

  useEffect(() => {
    let timer;
    if (isPressing) {
      // If the button is being pressed, start the timer
      timer = setTimeout(() => {
        callback(); // Execute the callback after the specified delay
      }, delay);
    } else {
      // If the button is released, clear the timer
      clearTimeout(timer);
    }

    return () => clearTimeout(timer); // Clean up the timer when component is unmounted
  }, [isPressing, callback, delay]);

  return { onMouseDown: handleMouseDown, onMouseUp: handleMouseUp };
}

const LongPressButton = ({ onLongPress, delay = 100, children, ...props }) => {
  const { onMouseDown, onMouseUp } = useLongPress(onLongPress, delay);

  return (
    <Button
      {...props}
      sx={{
        borderRadius: "30px",
        color: "black",
        textAlign: "center",
        px: "20px",
        fontWeight: "bold",
        fontSize: "18px",
        ":hover": {
          opacity: "0.8",
          outline: "2px solid black",
          cursor: "pointer",
        },
        ":disabled": {
          bg: "lightgray",
        },
        transition: "100ms ease-in",
        ...props.sx,
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp} // Ensure that releasing mouse outside stops the timer
    >
      {children}
    </Button>
  );
};

export default LongPressButton;
