import "./loading.scss";
import lottie from "./lottie.json";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Lottie from "react-lottie";

const Loading = () => {
  const { width } = useWindowDimensions();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading-container">
      <Lottie
        options={defaultOptions}
        height={width * 0.3}
        width={width * 0.3}
      />
    </div>
  );
};

export default Loading;
