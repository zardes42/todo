import React from "react";

const TodoItem = ({
  text,
  onDelete,
  id,
  Checked,
  onChecked,
  editing,
  onDoubleClick,
  todoEdit,
  onTodoSubmit
}) => {
  let viewMode = {};
  let editMode = {};
  if (editing === true) {
    viewMode = {
      display: "none",
    };
  } else {
    editMode = {
      display: "none",
    };
  }

  return (
    <React.Fragment>
      <div className="row w-100 p-2">
      <form  className="input-field" onSubmit={(e) => { e.preventDefault(); return onTodoSubmit(id)}}>
      <input
          id ={id}
            type="text"
            defaultValue={text}
            onChange={(e) => {return todoEdit(e)}}
            onDoubleClick={() => {
              return onDoubleClick(id);

            }}
            className={
              Checked === true
                ? "form-control text-decoration-line-through "
                : "form-control"
            }
            style={editMode}
          />
          </form>
        <div className="col-1">
          <input
            onChange={() => {
              return onChecked(id);
            }}
            style={viewMode}
            className="form-check-input"
            id="flexCheckDefault"
            type="checkbox"
            value=""
            checked={Checked}
          />
        </div>
        <div className="col-10">
          <label
            
            htmlFor="flexCheckDefault"
            className={Checked === true ? "form-check-label text-decoration-line-through text-black-50 " : "form-check-label"}
            onDoubleClick={() => {
              return onDoubleClick(id);
            }}
            style={viewMode}
          >
            {" "}
            {text}{" "}
          </label>
      
        </div>

        <div className="col-1">
          <button
           style={viewMode}
            className="btn btn-outline-danger border-0"
            onClick={() => {
              return onDelete(id);
            }}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
