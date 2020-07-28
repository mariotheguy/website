import React from 'react';

const Modal = (props) => (
  <>
    <div
      className="
            modal
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div
          className="
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-white
                outline-none
                focus:outline-none"
        >
          <div
            className="
                  flex
                  items-start
                  justify-between
                  p-5 border-b
                  border-solid
                  border-gray-300
                  rounded-t"
          >
            <h3 className="text-2xl font-semibold">{props.modalHeader}</h3>
            <button
              className="
                    p-1
                    ml-auto
                    bg-transparent
                    border-0
                    text-black
                    opacity-5
                    float-right
                    text-3xl
                    leading-none
                    font-semibold
                    outline-none
                    focus:outline-none"
              onClick={() => {
                props.setModal(false);
              }}
            >
              <span
                className="
                      bg-transparent
                      text-black
                      opacity-5
                      h-6
                      w-6
                      text-2xl
                      block
                      outline-none
                      focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex content-around">{props.children}</div>
        </div>
      </div>
    </div>
    <div className="modal-background opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
);

export default Modal;
