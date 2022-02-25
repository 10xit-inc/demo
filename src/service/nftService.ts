import axios from "axios";

const mintNFT = async (data: any) => {
  const key =
    process.env.REACT_APP_KEY !== undefined ? process.env.REACT_APP_KEY : "";
  return await axios.post(
    `https://x2quvxjlqf.execute-api.us-east-1.amazonaws.com/dev/create-nft/${process.env.REACT_APP_WALLET_ID}`,
    data,
    { headers: { "X-API-KEY": key } }
  );
};

const getNFTs = async () => {
  const key =
    process.env.REACT_APP_KEY !== undefined ? process.env.REACT_APP_KEY : "";
  return await axios.get(
    `https://x2quvxjlqf.execute-api.us-east-1.amazonaws.com/dev/get-all-nfts`,
    { headers: { "X-API-KEY": key } }
  );
};

export default { mintNFT, getNFTs };
