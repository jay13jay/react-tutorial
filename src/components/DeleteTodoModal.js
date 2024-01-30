function DeleteTodoModal() {
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn-warning">Cancel</button>
            <button className="btn btn-danger">Delete</button>
        </div>
    );
}

export default DeleteTodoModal;