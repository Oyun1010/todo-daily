import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { InputField } from "./InputField";
import { MdOutlineClose } from "react-icons/md";
import { createTodo, updateTodo } from "../data/api";
import '../scss/modal.scss';

export const TodoEdit = ({ todo, modalIsOpen, closeModal }) => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        if (todo != null) {
            setName(todo.name);
            setDesc(todo.desc);
        }
    })

    const clearDate = () => {
        setName("");
        setDesc("");
        setStartDate("");
        setEndDate("");
    }

    const handleChange = () => {
        if (todo == null) {
            createTodo(name, desc, startDate, endDate);
        }
        else {
            updateTodo(name, desc, startDate, endDate);
        }
        closeModal();
        clearDate();
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="modal"
        >
            <div className="main">
                <div className="head">
                    <span />
                    <h2>Todo</h2>
                    <span className="close-btn" onClick={() => {
                        closeModal();
                        clearDate();
                    }}><MdOutlineClose /></span>
                </div>

                <InputField label={"Name"} type={"text"} placeHolder={"Name"} value={name} changed={(e) => setName(e.target.value)} />
                <InputField label={"Desc"} type={"text"} placeHolder={"description"} value={desc} changed={(e) => setDesc(e.target.value)} />
                <InputField label={"Start Date"} type={"date-time"} placeHolder={"2023-01-01"} value={startDate} changed={(e) => setStartDate(e.target.value)} />
                <InputField label={"End Date"} type={"date-time"} placeHolder={"2023-01-01"} value={endDate} changed={(e) => setEndDate(e.target.value)} />

                <button onClick={handleChange}>{
                    todo != null ? "Update" : "Create"
                }</button>


            </div>

        </Modal>
    )
}