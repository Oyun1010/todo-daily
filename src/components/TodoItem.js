import React, { useState } from "react";
import { HiOutlineTrash, HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { TodoEdit } from "./TodoEdit";
import { TodoDelete } from "./TodoDelete";
import { updateTodo } from "../data/api";
import '../scss/todoitem.scss';
export const TodoItem = ({ e }) => {

    const [editData, setEditData] = useState(e);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isDone, setIsDone] = useState(e.is_done);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteData, setDeleteDate] = useState(null);

    return (
        <>
            <div className="todo-item" >

                <span className="check-box" onClick={() => {
                    setIsDone(!isDone);
                    e.is_done = !e.is_done;
                    updateTodo(e);
                }}>
                    {
                        isDone
                            ? <MdOutlineCheckBox />
                            : <MdOutlineCheckBoxOutlineBlank />
                    }
                </span>

                <div className="data">
                    <h4>{e.name}</h4>
                    <p className="datetime">{e.start_date.substring(5, 10) + " - " + e.end_date.substring(5, 10)}</p>
                    <p className="desc">{e.desc}</p>
                </div>

                <div className="btns">
                    <span onClick={() => { setEditData(e); setIsOpen(true) }}><HiOutlinePencilSquare /></span>
                    <span onClick={() => { setDeleteDate(e); setDeleteModal(true) }}><HiOutlineTrash /></span>
                </div>
            </div>
            <TodoEdit todo={editData}
                modalIsOpen={modalIsOpen}
                closeModal={() => {
                    setIsOpen(false);
                }} />
            <TodoDelete data={deleteData}
                modalIsOpen={deleteModal}
                closeModal={() => {
                    setDeleteModal(false);
                }} />


        </>

    )
}