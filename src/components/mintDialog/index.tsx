import FileUpload from "../fileUpload";
import "./mintDialog.scss";

interface Props {
  close: () => void;
}

const MintDialog = (props: Props) => {
  const { close } = props;

  return (
    <div className="dialog-container">
      <div className="dialog">
        <FileUpload close={close} />
      </div>
    </div>
  );
};

export default MintDialog;
