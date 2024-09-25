import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item
            className="text-start d-flex justify-content-between align-items-center"
            key={index}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
              }}
            >
              {task.text}
            </span>

            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={() => toggleTask(index)}>
                {task.completed ? "🔄" : "✔️"}
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteTask(index)}
                className="ms-2"
              >
                🗑️
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  toggleTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskList;
