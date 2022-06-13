import { useEthereum } from "@cryptogate/react-providers";
import { Identicon } from "../Identicon";
import { utils, ethers } from "ethers";
import { useEffect, useState } from "react";
import { useTheme } from "@cryptogate/react-providers";

const disconnect =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAyFJREFUOI2tlc9rHHUUwD/vOzOb6IZiakCJl0hoLoGW6mrY2c3GLdH6A0QQKYgUevKu4M0/wJN/gCBovWjoRasHGzsuM7sxMRoprAerNBUNzcHupkpJnN3v87AzcdzOqojv8mDe+36+7/t+jfA/SqvVOmqtvQgg6cdGo/FgsVjcLZVKt//usKqaVqv1lLW2JiJHVPV713UvqOota+0qcBL4QlKo4zhXgSvGmGXf92/mQRO/FeDhIVMM/AzMAFue5z1uAIrF4i5wBThprV1ttVpHh6FhGM45jhMl0Guq+rqqvgy8CzgJdNsYs7ywsPDLYSqS/KRP2cpGHobhnIgEwDTwURzHL9br9d8yZ09baz8BeiIyV6lUrh+CR8H7/f5UBvrh5OTkC/Pz878PvyiKoneAs8Ar1Wr1TZM1+r5/0xizDGwlabn8b6BpXImeBTDD1iH4CWBaRC7+AxTgvkT/mgvOgQNM7+3tTYwiBkEwAZwDMMZ8ngtuNpuzYRi+0ev1nBSuqg+p6qW8bmm324VCoXAemFHVjXK5fOkOcKPROKaqDRF5zXGc09nI8+DtdrvQ7XbfV9XngB3Xdc+IiIXM5K2trc30+/0IeIChQgVBcI/neZ8CjwDfeJ637DjOrYODgw8S6K619lStVvs25QkMxrTZbG4waP7c6mdbUUS+VtWfgGeBHVWtLy4ufpf1F4Aoip4GPgauxXF8PNv8Q0XKRk5epKkYABGpJZG/PQoKUK/Xu8aYJ/mzW26MjY3t5vmaBHgkueDGKGi73S40m82Xer2eE8fxKeBL4EQcx58FQTA1CvxDov1R0E6ns6Kq5x3HebVer3fjOH4ihXuet7q+vn7vHWDXdS8AsYicDcNwOesQBMFEp9NZISkU8Faaliw8juO/wAUOK/4Vg9XXB95T1ZaI3M9gomaAnX6//9jS0tLV7MXDi2t8fLxaKpVuy5Bhm8HCKWQPq+qG67pnyuXydl6qMozjIjJbqVSuSxiG6yLyKMmatNZOAM8Dx4A9EQl8319NJ2qUbG5u3r2/vz9VrVZ/BJAoii4Ddxljnhn1S/ov8gdQvalD20NEGgAAAABJRU5ErkJggg==";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/ced28563ff504eeca880d195dda82166"
);
const useENS = () => {
  const [name, setname] = useState("");
  const getName = (addr: string) => {
    provider.lookupAddress(addr).then((resolvedName) => {
      if (resolvedName) setname(resolvedName);
      else setname("");
      return resolvedName ? resolvedName : null;
    });
  };
  return { name, getName };
};

const WalletInformation = ({
  onDisconnect,
  direction = "y",
}: {
  onDisconnect: any;
  direction?: string;
}) => {
  const { getEthBalance, account, deactivate } = useEthereum();
  const etherBalance = getEthBalance(account);
  const { getName, name } = useENS();
  const { Theme } = useTheme();

  const handleDisconnect = () => {
    account && deactivate();
    onDisconnect();
  };

  useEffect(() => {
    if (account) {
      getName(account);
    }
  }, [account]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction == "y" ? "column" : "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {account && name && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <p
              style={{
                color: Theme.secondaryText,
                margin: "0 10px 0 0",
                opacity: "50%",
                lineHeight: 1,
              }}
            >
              {account?.slice(0, 6)}...{account?.slice(-3)}
            </p>
            <p
              style={{
                color: Theme.secondaryText,
                lineHeight: 0,
                opacity: "50%",
              }}
            >
              {name ? name : ""}
            </p>
          </div>
        )}
        {account && !name && (
          <p
            style={{
              color: Theme.secondaryText,
              margin: "0 10px 0 0",
              opacity: "50%",
              lineHeight: 1,
            }}
          >
            {account?.slice(0, 6)}...{account?.slice(-3)}
          </p>
        )}
        <span
          style={{
            marginLeft: "10px",
            cursor: "pointer",
            height: "22px",
            width: "22px",
          }}
        >
          <img
            src={disconnect}
            alt="Disconnect"
            className="disconnect"
            onClick={handleDisconnect}
          />
        </span>
        <span
          style={{
            display: direction == "x" ? "flex" : "none",
            margin: "0 0 0 4vw",
          }}
        >
          <Identicon />
        </span>
      </div>

      {direction == "y" && (
        <hr style={{ width: "100%", marginBottom: "2vh" }} />
      )}
      <div
        style={{
          marginRight: direction == "x" ? "10vw" : "0",
          padding: 0,
        }}
      >
        <p style={{ margin: 0, color: Theme.secondaryText }}>Total Balance</p>
        <p
          style={{
            fontWeight: "bold",
            margin: 0,
            color: Theme.primaryText,
          }}
        >
          {etherBalance &&
            account &&
            utils.formatEther(etherBalance).slice(0, 7)}{" "}
          ETH
        </p>
      </div>
    </div>
  );
};

export default WalletInformation;
