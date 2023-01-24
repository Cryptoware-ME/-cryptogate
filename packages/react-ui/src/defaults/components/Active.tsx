import { useState } from "react";

/**
 * Active component is the active state of the Connect Wallet button that the user sees on the screen.
 */
export const Active = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      style={{
        background: isHovering ? "#000000" : "transparent",
        color: isHovering ? "#ffffff" : "#000000",
        borderRadius: "5px",
        padding: "1vh 2vw",
        cursor: isHovering ? "pointer" : "auto",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Connect Wallet
    </button>
  );
};
