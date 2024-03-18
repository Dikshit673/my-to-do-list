const ToDoListCom = (props) => {
    return (
        <>
            <div className="container center-todo-cont">
                <div className="row">
                    <div className=" col-12 ">
                        <div className="d-flex justify-content-between">
                            <div className=" todo-botom-text">
                                <p className="container todo-botom-comm">{props.valueName}</p>
                            </div>
                            <div className=" todo-botom-icon">
                                <i className="todo-botom-comm todo-diff1 fa-solid fa-pen-to-square" onClick={() => { props.onSelectEdit(props.id) }}></i>
                                <i className="todo-botom-comm todo-diff2 fa-solid fa-trash" onClick={() => { props.onSelectDelete(props.id) }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
};
export default ToDoListCom;