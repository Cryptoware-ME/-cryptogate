import { useTheme } from "@cryptogate/react-providers";

const DisconnectBtn = () => {
  const { Theme } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <g
        id="Group_3655"
        data-name="Group 3655"
        transform="translate(-660.042 -514.38)"
      >
        <path
          id="Path_12166"
          data-name="Path 12166"
          d="M672.351,853.66a.974.974,0,0,0-1.378,0l-1.816,1.816a3.392,3.392,0,0,1-4.774.011l-.011-.012-.012-.011a3.388,3.388,0,0,1,.012-4.774l1.816-1.816a.974.974,0,0,0,0-1.378h0a.974.974,0,0,0-1.378,0l-1.816,1.816a5.34,5.34,0,0,0-.626,6.789l-2.039,2.039a.975.975,0,1,0,1.379,1.379l2.039-2.039a5.341,5.341,0,0,0,6.789-.626l1.816-1.816a.974.974,0,0,0,0-1.378Z"
          transform="translate(0 -323.424)"
          fill={Theme.secondaryBackground}
          opacity="50%"
        />
        <path
          id="Path_12167"
          data-name="Path 12167"
          d="M742.855,514.666a.975.975,0,0,0-1.379,0l-2.04,2.04a5.343,5.343,0,0,0-6.791.625l-3.587,3.589-4.476-4.476a.975.975,0,1,0-1.379,1.379L739.7,534.317a.975.975,0,0,0,1.379-1.379l-4.476-4.476,3.587-3.587a5.343,5.343,0,0,0,.627-6.79l2.041-2.041A.975.975,0,0,0,742.855,514.666ZM738.81,523.5l-3.588,3.588-4.785-4.785,3.587-3.587a3.387,3.387,0,0,1,4.774-.012l.011.012.011.011A3.386,3.386,0,0,1,738.81,523.5Z"
          transform="translate(-61.098)"
          fill={Theme.secondaryBackground}
          opacity="50%"
        />
      </g>
    </svg>
  );
};

export default DisconnectBtn;
