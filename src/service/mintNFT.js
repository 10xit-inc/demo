import axios from 'axios'

const mintNFT = async () => {
    const res = await axios.post(
        "https://rx0i29sfy3.execute-api.us-east-1.amazonaws.com/prod/create-nft/ecbf464f-c74c-4d95-aa20-f86629a57ecc",
        { headers: { "X-API-KEY": "cp7KQvrhK32kOQM88SwMf9dRP4t0wAhL67rpS8lR" } }
      );
      console.log(res);
}
export default mintNFT;