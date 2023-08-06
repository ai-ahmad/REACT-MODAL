import { useState } from "react";
import "./App.css";
import Modal from "./components/moda";

function App() {
  let [cloese , SetModal] = useState(false)

  // close modal function 
  function closeModal() { 
    SetModal(false)
  }

  return (
    <>
      {cloese && <Modal closeModal={closeModal}>
        <h1>
          Hello my name is Akhmad in forst name is ahmedov , age 13👨‍🦯 my hobi in
          programing frontent
        </h1>
        <p>Good-by👋</p>
      </Modal>}

     <div className="open">
     <button onClick={() => SetModal(true)}>Open Modal</button>
     </div>
    </>
  );
}

export default App;
