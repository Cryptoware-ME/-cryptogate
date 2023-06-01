/**

The Disabled component represents a disabled button with a specific styling.
@returns {React.ReactNode} The rendered Disabled component.

*/

export const Disabled = () => {
  return (
    <button
      disabled
      style={{
        background: "transparent",
        color: "#c4c4c4",
        borderColor: "#c4c4c4",
        borderRadius: "5px",
        padding: "1vh 2vw",
      }}
    >
      Connect Wallet
    </button>
  );
};
