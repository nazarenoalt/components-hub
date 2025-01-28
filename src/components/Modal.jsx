import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClick }) => {
  const modalRef = useRef();

  useEffect(() => {
    const escapeModal = (e) => {
      if (e.key === "Escape") {
        onClick && onClick();
      }
    };

    document.body.classList.add('overflow-hidden');
    modalRef?.current?.focus();
    document.addEventListener('keydown', escapeModal);
    
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', escapeModal);
    };
  }, [onClick]);

  return ReactDOM.createPortal(
    <div className="z-100 fixed inset-0 flex justify-center pt-40">
      <div className="bg-black absolute inset-0 opacity-25"></div>
      <div
        className="bg-white p-4 absolute rounded w-96 max-h-[70vh] lg:w-[700px] lg:p-8 min-h-40 text-black overflow-y-scroll overflow-x-hidden"
        tabIndex="0"
        ref={modalRef}
      >
        {children}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;