import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholde="Aprender ..."
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        />
        <button className="btn btn-outline-info btn-block mt-1" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};
