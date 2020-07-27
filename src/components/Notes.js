import React from "react";

export const Notes = ({ notes, onRemove }) => {
  return (
    <ul className="list-group">
      {!!notes
        ? notes
            .map((note) => (
              <li className="list-group-item note" key={note.id}>
                <div>
                  <strong>{note.title}</strong>
                  <p>
                    <small>{note.date}</small>
                  </p>
                </div>
                <button
                  onClick={() => onRemove(note.id)}
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  &times;
                </button>
              </li>
            ))
            .reverse()
        : "Пока ничего нет"}
    </ul>
  );
};
