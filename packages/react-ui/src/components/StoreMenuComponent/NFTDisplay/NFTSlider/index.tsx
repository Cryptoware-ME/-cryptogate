import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NFTImage from "./NFTImage";
import { build_slider_settings } from "../../../../utils/constants";

const index = ({
  URIs,
  symbols,
  numbers,
  full,
}: {
  URIs: any;
  symbols: any;
  numbers: any;
  full: boolean;
}) => {
  return (
    <div style={{ maxWidth: "300px", padding: "0vh 25px" }}>
      <Slider {...build_slider_settings({ full: full })}>
        {URIs.map((uri: string[], index: number) => {
          return (
            <div
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
    </div>
  );
};

export default index;
