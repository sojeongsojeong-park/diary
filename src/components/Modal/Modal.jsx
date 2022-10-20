import React, { useContext } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import { DiaryContext } from "../../context/DiaryContext";
import DiaryForm from "../../pages/home/DiaryForm";

import classes from "./Modal.module.css";
import Diary from "../../pages/home/Diary";

const Modal = () => {
  const { user } = useAuthContext();
  const openHandler = useContext(DiaryContext);
  console.log(openHandler);
  return (
    <div
      className={classes.diaryFormContainer}
      onClick={() => {
        openHandler.updateOpenHandler(false, "", null);
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {openHandler.openState.data === null && <DiaryForm uid={user.uid} />}
        {openHandler.openState.data && <Diary />}
      </div>
    </div>
  );
};

export default Modal;
