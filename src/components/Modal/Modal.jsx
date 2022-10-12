import React, { useContext } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import { DiaryContext } from "../../context/DiaryContext";
import DiaryForm from "../../pages/home/DiaryForm";

import classes from "./Modal.module.css";

const Modal = () => {
  const { user } = useAuthContext();
  const openHandler = useContext(DiaryContext);
  return (
    <div
      className={classes.diaryFormContainer}
      onClick={() => {
        console.log("modal");
        openHandler.updateOpenHandler(false, "");
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <DiaryForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Modal;
