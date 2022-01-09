import axios from "axios";

const mintNFT = async (data) => {
  return await axios.post(
    `https://x2quvxjlqf.execute-api.us-east-1.amazonaws.com/dev/create-nft/${process.env.REACT_APP_WALLET_ID}`,
    data,
    { headers: { "X-API-KEY": process.env.REACT_APP_KEY } }
  );
};

const getNFTs = async () => {
  return await axios.get(
    `https://x2quvxjlqf.execute-api.us-east-1.amazonaws.com/dev/get-all-nfts`,
    { headers: { "X-API-KEY": process.env.REACT_APP_KEY } }
  );
};

export default { mintNFT, getNFTs };
