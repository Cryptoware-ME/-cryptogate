import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NFTImage from "./NFTImage";
import { build_slider_settings } from "../../../../utils/constants";

const index = ({
  URIs,
  symbols,
  numbers,
  onCollectionSelected,
}: {
  URIs: any;
  symbols: any;
  numbers: any;
  onCollectionSelected: any;
}) => {
  return (
    <div
      style={{
        minWidth: "300px",
        maxWidth: "300px",
        padding: "1vh 25px 0 25px",
      }}
    >
      {URIs.length > 0 ? (
        <Slider {...build_slider_settings({})}>
          {URIs.map((uri: string[], index: number) => {
            return (
              <div
                onClick={() => {
                  onCollectionSelected(index);
                }}
                key={`${Array.isArray(symbols) ? symbols[index] : symbols}-${
                  numbers[index]
                }`}
              >
                <NFTImage
                  key={index}
                  URI={uri}
                  number={numbers[index]}
                  symbol={Array.isArray(symbols) ? symbols[index] : symbols}
                />
              </div>
            );
          })}
        </Slider>
      ) : (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <br />
          <br />
          Oops..
          <br />
          There's nothing to show here
        </div>
      )}
    </div>
  );
};

export default index;
