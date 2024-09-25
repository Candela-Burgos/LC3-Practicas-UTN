import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { useState } from "react";

const AddNewTask = ({addTask}) => {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      addTask(newTask);
      setNewTask("");
    };

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="d-flex mb-2">
        <Form.Control
          type="text"
          id="task"
          placeholder="My new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button className="ms-2" type="submit">
          Submit
        </Button>
      </Form.Group>
      </Form>
    </>
  );
};

AddNewTask.propTypes = {
    addTask: PropTypes.func,
}

export default AddNewTask;
