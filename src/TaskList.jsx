function TaskList(props) {
  return (
    <ul>
      {props.tasks.length === 0 ? (
        <p>No Tasks</p>
      ) : (
        props.tasks.map((task, index) => {
          return(
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => props.handleToggleComplete(index)}
              />
              {task.text}
              <button onClick={() => props.handleDeleteTasks(index)}>
                Delete
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
}
export default TaskList;