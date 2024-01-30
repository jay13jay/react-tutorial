import ModalTest from "./ModalTest";

function Todo(props) {
    function handleDelete() {
        console.log(props.title, "clicked!");
        <ModalTest />    
    }

    return (
    <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
    </div>
    );
}

export default Todo;