import { useEffect } from "react";
import { modalType } from "./interface";
import { ModalContainer } from "./style";

const Modal = ({ modalState, children }: modalType) => {
  return (
    <>
      {modalState ? (
        <>
          <ModalContainer>{children}</ModalContainer>
        </>
      ) : null}
    </>
  );
};

export default Modal;
