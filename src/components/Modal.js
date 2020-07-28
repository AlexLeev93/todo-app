import React, { useEffect, useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { customHistory } from "../App";
import qs from "qs";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { AlertContext } from "../context/alert/alertContext";

const CustomModal = (note) => {
  const [isShow, setShow] = useState();
  const alert = useContext(AlertContext);
  const { removeNote } = useContext(FirebaseContext);
  useEffect(() => {
    if (qs.parse(customHistory.location.search.replace("?", "")).modal) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [customHistory.location.search]);
  const hide = () => {
    customHistory.push(customHistory.location.pathname);
  };
  const onRemove = (note) => {
    customHistory.push(customHistory.location.pathname);
    removeNote(note.id)
      .then(() => {
        alert.show("Заметка была удалена!", "warning");
        setTimeout(() => {
          alert.hide();
        }, 2000);
      })
      .catch(() => {
        alert.show("Что-то пошло не так!", "danger");
      });
  };
  return (
    <div>
      <Modal show={isShow} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Удалить заметку</Modal.Title>
        </Modal.Header>
        <Modal.Body>Вы уверены, что хотите удалить заметку?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Отмена
          </Button>
          <Button variant="primary" onClick={() => onRemove(note)}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomModal;
