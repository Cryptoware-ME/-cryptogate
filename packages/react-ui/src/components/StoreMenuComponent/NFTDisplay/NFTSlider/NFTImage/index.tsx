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
