import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import MintDialog from "./components/mintDialog";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [mintDialog, setMintDialog] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleMintDialog = () => {
    setMintDialog(!mintDialog);
  };

  return (
    <div className="app">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {mintDialog && <MintDialog close={toggleMintDialog} />}
      <NavBar toggle={toggle} mintDialog={toggleMintDialog} />
      <Home />
    </div>
  );
}

export default App;
