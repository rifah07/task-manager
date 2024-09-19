function TaskList(props) {
  return (
    <ul>
      {props.tasks.length === 0 ? (
        <p>No Tasks</p>
      ) : (
        props.tasks.map((task, index) => {
          <li key={index}>
            <input type="checkbox" checked={task.completed} />
            {task.text}
            <button>Delete</button>
          </li>;
        })
      )}
    </ul>
  );
}
export default TaskList;