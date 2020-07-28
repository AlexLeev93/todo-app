import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { customHistory } from "../App";
import CustomModal from "../components/Modal";

export const Notes = ({ notes, onRemove }) => {
  const [note, setNote] = useState("");
  const showModal = (note) => {
    customHistory.push("/?modal=true");
    setNote(note);
  };
  return (
    <TransitionGroup component="ul" className="list-group">
      <CustomModal id={note} />
      {!!notes
        ? notes
            .map((note) => (
              <CSSTransition key={note.id} classNames={"note"} timeout={800}>
                <li className="list-group-item note">
                  <div>
                    <strong>{note.title}</strong>
                    <p>
                      <small>{note.date}</small>
                    </p>
                  </div>
                  <button
                    onClick={() => showModal(note.id)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    &times;
                  </button>
                </li>
              </CSSTransition>
            ))
            .reverse()
        : "Пока ничего нет"}
    </TransitionGroup>
  );
};
