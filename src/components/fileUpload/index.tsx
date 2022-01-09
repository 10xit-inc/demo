import { useState } from "react";
import "./fileUpload.scss";
import Button from "../button";
import nftService from "../../service/nftService";
import { IoMdClose } from "react-icons/io";
import Loading from "../loading";
import { toast } from "react-toastify";

interface Props {
  close: () => void;
}

const FileUpload = (props: Props) => {
  const { close } = props;
  const [file, setFile] = useState({ name: "", type: "" });
  const [fileBase64, setFileBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function setFileData(file?: any) {
    const newFile = file.target.files[0];
    setFile({
      name: newFile.name,
      type: newFile.type,
    });
    const reader = new FileReader();
    reader.readAsDataURL(newFile);
    reader.onload = function () {
      setFileBase64(reader.result?.toString() ?? "");
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
      return null;
    };
  }

  const onMintClicked = async () => {
    setLoading(true);
    try {
      const req = {
        metadata: {
          name: name,
          description: description,
        },
        filename: file["name"],
        content: fileBase64,
      };
      const res = await nftService.mintNFT(req);
      if (res.status === 200) {
        createToast("Minted!");
        close();
      } else {
        createToast(
          "Oops, something went wrong :( Our developers have been notified"
        );
      }
    } catch (e) {
      console.log(e);
      createToast(
        "Oops, something went wrong :( Our developers have been notified"
      );
    }
    setLoading(false);
  };

  const createToast = (msg: string) => {
    toast(msg, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="file-upload-container">
      {loading && <Loading />}
      <div className="close-button-container">
        <button className="close-button" onClick={close}>
          <IoMdClose />
        </button>
      </div>
      <br />
      <div className="text-field">
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <br />
      <label className="custom-file-upload">
        <input type="file" multiple onChange={(e) => setFileData(e)} />
        Select file
      </label>
      {file.name !== "" && <p>{file.name}</p>}
      <br />
      <Button
        onClick={onMintClicked}
        disabled={name === "" || description === "" || fileBase64 === ""}
      >
        Mint!
      </Button>
    </div>
  );
};

export default FileUpload;
