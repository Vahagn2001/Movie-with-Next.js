import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import s from "./SupportBtn.module.css";
import { Popup } from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSupport,
  getIsOpen,
  openSupport,
} from "@/store/slices/supportSlice";

export const SupportBtn = () => {
  const isOpen = useSelector(getIsOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(openSupport())}
        aria-label="Ask a question"
        className={s.btn}
        type="button"
      >
        <FontAwesomeIcon icon={faCircleQuestion} />
      </button>

      <Popup isOpen={isOpen} onClose={() => dispatch(closeSupport())}>
        <input />
      </Popup>
    </>
  );
};
