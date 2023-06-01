import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import NFTImage from "./NFTImage";
import { build_slider_settings } from "../../../../utils/constants";
import { imageURI, isUriIPFS } from "../../../../utils/helpers";

/**

The index component represents a slider of NFT images with associated information.
@param {Object} props - The component props.
@param {Array} props.URIs - The array of URIs of the images.
@param {Array} props.symbols - The array of symbols associated with the images.
@param {Array} props.numbers - The array of numbers associated with the images.
@param {Function} props.onCollectionSelected - The callback function for when a collection is selected.
@returns {React.ReactNode} The rendered index component.
@example
// Example usage
const ExampleComponent = () => {
const URIs = ["https://example.com/image1.jpg", "https://example.com/image2.jpg"];
const symbols = ["ABC", "DEF"];
const numbers = [1, 2];
const handleCollectionSelected = (index) => {
console.log("Collection selected:", index);
}
return (
<index URIs={URIs} symbols={symbols} numbers={numbers} onCollectionSelected={handleCollectionSelected} />
);
};
*/

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
          {URIs.map(async (uri: string[], index: number) => {
            let realURI = "";
            if (uri) {
              const validURI = isUriIPFS(uri);
              if (validURI) {
                try {
                  const newURI = `https://gateway.ipfs.io/ipfs/${validURI}`;
                  const res = await fetch(newURI);
                  const parsedRes = await res.json();
                  realURI = imageURI(parsedRes);
                } catch (e) {
                  console.log(e);
                }
              } else {
                try {
                  const res = await fetch(uri[0]);
                  const parsedRes = await res.json();
                  realURI = imageURI(parsedRes);
                } catch (e) {
                  console.log(e);
                }
              }
            }
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
                  URI={realURI}
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
