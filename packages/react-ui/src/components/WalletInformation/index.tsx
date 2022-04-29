import { useMultichain } from "@cryptogate/react-providers";
import { utils } from "ethers";

const disconnect =
  "data:image/png;base64,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OTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDpkM2E1ZjNlOS1hMTVjLTRhMzktYTRmMi1mNjQ1YTdkMTcyNzEiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzFhNzI4MWQtZDI3My00MGMyLTg0MGEtMGU4MmU2Yjk4ZGUzIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YjkyNjU0NjAtMmIyNi00ODM4LWIzNzAtMjdiNmQ1MjZjNjZhIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2MzM1MDAxMzA1MTEyMDYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yNCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4YWJjMjVlNS01ZTRiLTQ2YzMtYTNjYi01M2M0MTM2ZTEyN2EiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjEtMTAtMDZUMDk6MDI6MTAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+ozETZgAACjppQ0NQUGhvdG9zaG9wIElDQyBwcm9maWxlAABIiZ2Wd1RU1xaHz713eqHNMBQpQ++9DSC9N6nSRGGYGWAoAw4zNLEhogIRRUQEFUGCIgaMhiKxIoqFgGDBHpAgoMRgFFFReTOyVnTl5b2Xl98fZ31rn733PWfvfda6AJC8/bm8dFgKgDSegB/i5UqPjIqmY/sBDPAAA8wAYLIyMwJCPcOASD4ebvRMkRP4IgiAN3fEKwA3jbyD6HTw/0malcEXiNIEidiCzclkibhQxKnZggyxfUbE1PgUMcMoMfNFBxSxvJgTF9nws88iO4uZncZji1h85gx2GlvMPSLemiXkiBjxF3FRFpeTLeJbItZMFaZxRfxWHJvGYWYCgCKJ7QIOK0nEpiIm8cNC3ES8FAAcKfErjv+KBZwcgfhSbukZuXxuYpKArsvSo5vZ2jLo3pzsVI5AYBTEZKUw+Wy6W3paBpOXC8DinT9LRlxbuqjI1ma21tZG5sZmXxXqv27+TYl7u0ivgj/3DKL1fbH9lV96PQCMWVFtdnyxxe8FoGMzAPL3v9g0DwIgKepb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";

const WalletInformation = ({ onClose }: { onClose: any }) => {
  const { ethereum } = useMultichain();
  const { getEthBalance, account, deactivate } = ethereum;
  const etherBalance = getEthBalance(account);

  const handleDisconnect = () => {
    account && deactivate();
    onClose();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeContent: "space-between",
        width: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#c4c4c4", marginRight: "10px" }}>
          {account?.slice(0, 6)}...{account?.slice(-3)}
        </p>
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
      </div>
      <hr style={{ width: "100%" }} />
      <div>
        <p>Total Balance</p>
        <h5>
          {etherBalance &&
            account &&
            utils.formatEther(etherBalance).slice(0, 7)}{" "}
          ETH
        </h5>
      </div>
    </div>
  );
};

export default WalletInformation;
