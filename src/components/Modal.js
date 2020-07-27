import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { customHistory } from "../App";
import qs from 'qs';

export default () => {
  const [isShow, setShow] = useState();
  useEffect(()=>{
    if(qs.parse(customHistory.location.search.replace("?","")).modal){
      setShow(true)
    }else{
      setShow(false)
    }
  },[customHistory.location.search])
  const hide = ()=>{
    customHistory.push(customHistory.location.pathname)
  }
  const show = ()=>{
    setShow(true);
  }
  
  console.log(customHistory)
  return (
    <div>
      <Modal show={isShow} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button variant="primary" onClick={hide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
