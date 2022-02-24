import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import NFTCard from "../../components/nftCard";
import nftService from "../../service/nftService";
import NFT from "../../types/nft";
import "./home.scss";

const Home = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    getNFTs();
  }, []);

  const getNFTs = async () => {
    setLoading(true);
    const res = await nftService.getNFTs();
    const newNfts: NFT[] = res.data["NFTs"];
    setNfts(newNfts);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container" id="home">
      <div className="content">
        <div className="list">
          {nfts
            .sort((a, b) =>
              a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0
            )
            .map((nft) => {
              return <NFTCard key={nft.nftId} nft={nft} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
