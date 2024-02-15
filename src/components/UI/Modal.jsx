import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, className = "", open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    // store the dialog in a temporary const because
    // the clean up function will be executed later.
    // In this example, the value is not changing,
    // but it could be changed when clean up function does.
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
