import { useState } from "react";

/**

The Active component represents a button that changes its appearance when hovered over.
@returns {React.ReactNode} The rendered Active component.
@example
// Example usage
const ExampleComponent = () => {
return (
<Active />
);
};
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
