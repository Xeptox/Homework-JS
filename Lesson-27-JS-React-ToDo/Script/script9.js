const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = ({children}) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const textId = React.useRef();

    const handleClickEdit = () => {
        setIsEditing(true);
    }

    const handleClickRemove = () => {
        alert(`Pressed remove button ${children}`);
    }

    const handleClickSave = () => {
        alert(textId.current.value);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div className={'box'}>
                <textarea ref={textId}>{children}</textarea>
                <button onClick={handleClickSave} className={'btn success'}>Save</button>
            </div>
        )
    } else {
        return (
            <div className={'box'}>
                <div>{children}</div>
                <button onClick={handleClickEdit} className={'btn light'}>Edit</button>
                <button onClick={handleClickRemove} className={'btn red'}>Remove</button>
            </div>
        )
    }
}

const TaskList = () => {
    const [tasks, setTasks] = React.useState(['My task 1', 'My task 2', 'My task 3']);

    const deleteTask = index => {
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }

    const addTask = () => {
        setTasks([...tasks, 'New task']);
    }

    const editTask = (index, value) =>  {
        const tasksCopy = [...tasks];
        tasksCopy[index] = value;
        setTasks(tasksCopy);
    }

    return (
        <div className={'field'}>
            {tasks.map((task, index) => <Task key={index}>{task}</Task>)}
        </div>
    )
}

root.render(<TaskList/>)