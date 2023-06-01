/**

The index component represents an image with associated information.
@param {Object} props - The component props.
@param {string} props.URI - The URI of the image.
@param {number} props.number - The associated number.
@param {*} props.symbol - The associated symbol.
@returns {React.ReactNode} The rendered index component.
@example
// Example usage
const ExampleComponent = () => {
const URI = "https://example.com/image.jpg";
const number = 123;
const symbol = "ABC";
return (
<index URI={URI} number={number} symbol={symbol} />
);
};
*/

const index = ({
  URI,
  number,
  symbol,
}: {
  URI: string;
  number: number;
  symbol: any;
}) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: "10px 10px 0px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!URI && (
          <img
            alt={`${symbol}-${number}`}
            src="https://airnfts.s3.amazonaws.com/nft-images/20211121/Blur_1637529258562.png"
            width="100%"
          />
        )}
        {URI && <img alt={`${symbol}-${number}`} src={URI} width="100%" />}
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#666666",
          borderRadius: "0px 0px 10px 10px",
          color: "white",
          padding: "1px 1vw",
        }}
      >
        <div style={{ marginRight: "2vw" }}>{symbol}</div>
        {number && <div>{number}</div>}
      </div>
    </div>
  );
};

export default index;
