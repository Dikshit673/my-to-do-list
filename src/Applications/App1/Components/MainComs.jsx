//4.for ToDoList
import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
// import "./Style4.css";

const getItemFromLS = () => {
    let list = localStorage.getItem("myList")

    if (list) {
        return JSON.parse(list);
    }
    else {
        return [];
    }
}

const MainComs = () => {

    const [inputlist, setInputList] = useState("");
    const [item, setItem] = useState(getItemFromLS());
    const [toggleBtn, setTogglebtn] = useState(true);
    const [matchingId, setMatchingId] = useState(null);

    useEffect(() => {
        localStorage.setItem("myList", JSON.stringify(item))
    }, [item])

    const itemEvents = (event) => {
        setInputList(event.target.value);
    };
    const listofItem = () => {
        if (!inputlist) {
            alert("plzz fill the data first")
        }
        else if (inputlist && !toggleBtn) {
            let tempData = item.map((oldData) => {
                if (oldData.id === matchingId) {
                    return { ...oldData, name: inputlist }
                }
                return oldData;
            })
            setItem(tempData);
            setTogglebtn(!toggleBtn);
            setInputList("");
        }
        else {
            let newId = new Date().getTime().toString();
            setItem((oldData) => [...oldData, { id: newId, name: inputlist }]);
            setInputList("");
        }
    };


    const editItem = (id) => {
        let tempItem = item.find((currData) => {
            return currData.id === id;
        })
        setInputList(tempItem.name);
        setTogglebtn(false);
        setMatchingId(tempItem.id);
    }

    const deleteItem = (id) => {
        setItem((oldItem) => {
            return oldItem.filter((currdata) => {
                return currdata.id !== id;
            });
        });
    };

    return (
        <>
            <section className="todo-main-section d-flex flex-column">
                {/* <div className="todo-firstdiv">
                    <div className="container">
                        <h2>To-Do-List</h2>
                    </div>
                </div> */}
                <div className="container d-flex justify-content-center">
                    <div className="center-div">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 d-flex flex-column align-items-center">

                                <br />
                                <h2 className=" todo-main-heading">To-Do-List</h2>
                                <br />

                                <div className="d-flex justify-content-center align-items-center">
                                    <input className="todo-input-field" name="input1" type="text" placeholder="add a item" onChange={itemEvents} value={inputlist} autoComplete="off" />
                                    {toggleBtn ? <button className="todo-u-btn" type="submit" title="add a item" onClick={listofItem}><i className="fa-solid fa-plus"></i></button> : <button className="todo-u-btn" type="submit" title="add a item" onClick={listofItem}><i className="fa-solid fa-pen-to-square"></i></button>}
                                </div>

                                <br />
                                <br />

                                <div className="container">
                                    {item.map((itemval) => {
                                        return (
                                            <ToDoList
                                                key={itemval.id}
                                                id={itemval.id}
                                                valueName={itemval.name}
                                                onSelectDelete={deleteItem}
                                                onSelectEdit={editItem}
                                            />
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default MainComs;