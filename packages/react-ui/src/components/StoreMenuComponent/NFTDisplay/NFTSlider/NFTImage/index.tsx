import { useState, useEffect } from "react";
import { imageURI, isUriIPFS } from "../../../../../utils/helpers";

const index = ({
  URI,
  number,
  symbol,
}: {
  URI: string[];
  number: number;
  symbol: any;
}) => {
  const [image, setImg] = useState("");
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (URI) {
      const validURI = isUriIPFS(URI[0]);
      if (validURI) {
        const newURI = `https://gateway.ipfs.io/ipfs/${validURI}`;
        fetch(newURI)
          .then((d) => {
            return d.json();
          })
          .then((d) => {
            setImg(imageURI(d.image));
          })
          .catch((e) => {
            console.log(e);
            setEmpty(true);
          });
      } else {
        fetch(URI[0])
          .then((d) => {
            return d.json();
          })
          .then((d) => {
            setImg(imageURI(d.image));
          })
          .catch((e) => {
            console.log(e);
            setEmpty(true);
          });
      }
    }
  }, [URI]);

  return (
    <div style={{ padding: "0 1vw" }}>
      <div style={{ borderRadius: "10px", border: "1px solid black" }}>
        <div
          style={{
            overflow: "hidden",
            borderRadius: "10px 10px 0px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {empty && (
            <img
              alt={`${symbol}-${number}`}
              src="https://airnfts.s3.amazonaws.com/nft-images/20211121/Blur_1637529258562.png"
              width="100%"
            />
          )}
          {!empty && image && (
            <img alt={`${symbol}-${number}`} src={image} width="100%" />
          )}
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "#666666",
            borderRadius: "0px 0px 10px 10px",
            color: "white",
            width: "100%",
            padding: "1px 1vw",
          }}
        >
          <div style={{ marginRight: "2vw" }}>{symbol}</div>
          {number && <div>{number}</div>}
        </div>
      </div>
    </div>
  );
};

export default index;
