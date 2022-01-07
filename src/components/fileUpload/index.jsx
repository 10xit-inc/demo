import { useState } from "react";
import "./fileUpload.css";
import mintNFT from "../../service/mintNFT";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
      return null;
    };
 }

 const handleFileSelect = (e) => {
  const base64Img = getBase64(e.target.files[0])
  console.log(base64Img)
  setFile(base64Img);
 }

  const onFileUpload = async () => {

    // Details of the uploaded file
    console.log(file);

    // Request made to the backend api
    // Send formData object
    // const res = await mintNFT();
    // console.log(res);
  };

  const FileData = () => {
    if (file) {
      return (
        <div className="file-upload">
          <h2>File Details:</h2>
          <p>File Name: {file.name}</p>
          <p>File Type: {file.type}</p>
          <p>Last Modified: {file.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div className="file-upload">
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div className="file-upload">
      <div>
        <input type="file" onChange={(e) => handleFileSelect(e)} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      <FileData />
    </div>
  );
};

export default FileUpload;
