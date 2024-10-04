import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import s from "./Popup.module.css";
import { useEffect } from "react";

export const Popup = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={s.popup}>
      <div onClick={onClose} className={s.overlay} role="button" />

      <div className={s.content}>
        <button
          onClick={onClose}
          className={s.close}
          type="button"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>

        {children}
      </div>
    </div>
  );
};
