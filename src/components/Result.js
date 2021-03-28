import React, { useState } from "react";
import Modal from "simple-react-modal";

export default function Result(props) {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(false);
    document.location.reload();
  }

  return (
    <Modal show={show}>
      <p>Your final score is: {props.score}</p>
      <button onClick={handleClick}>Close</button>
    </Modal>
  );
}
