import NFT from "../../types/nft";
import "./nftCard.scss";

interface Props {
  nft: NFT;
}

function NFTCard(props: Props) {
  const { nft } = props;
  const image = nft.metadata["image"].split('/');

  return (
    <div className="nft-container">
      <div className="content-wrapper">
        <div className="width-control">
          <div className="pic-container">
            <img src={`https://ipfs.io/ipfs/${image[4]}`} alt="nft image" />
          </div>
          <div className="info-container">
            <h2>{nft.metadata["name"] ?? "NFT"}</h2>
            <a  target="_blank" href={nft.openseaUrl} rel="noreferrer">
            OpenSea
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
