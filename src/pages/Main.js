import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { Loader } from "../components/Loader";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

export const history = createBrowserHistory();
export const Main = (history) => {
  const { loading, notes, fetchNotes, removeNote } = useContext(
    FirebaseContext
  );
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <Fragment>
      <Modal />
      <Form />
      <Link to="/?modal=true">Open modal</Link>
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </Fragment>
  );
};
