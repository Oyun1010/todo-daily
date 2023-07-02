import React from "react";
import Modal from 'react-modal';
import { MdOutlineClose } from "react-icons/md";

import '../scss/deletemodal.scss';
import { deleteTodo } from "../data/api";

export const TodoDelete = ({ data, modalIsOpen, closeModal }) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="delete-modal"
        >
            <div className="delete-main">
                <div className="head">

                    <h2>Delete task</h2>

                    <span className="close-btn" onClick={() => {
                        closeModal();

                    }}><MdOutlineClose /></span>
                </div>
                <p>Are you sure want to delete {data && data.name}.</p>
                <div className="modal-buttons">
                    <button className="yes-btn" onClick={() => {
                        deleteTodo(data._id);
                        closeModal();
                    }}>Yes</button>
                    <button className="no-btn" onClick={closeModal}>No</button>
                </div>


            </div>

        </Modal>
    )
}