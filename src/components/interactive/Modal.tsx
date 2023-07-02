import { Cancel } from "iconoir-react";
import { useState } from "react";

type ModalProps = {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    setOpen,
    onClose,
    children,
}) => {
    const closeModal = () => {
        setOpen(false);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="bg-black-transparent fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 md:w-1/2 lg:w-1/3">
                        <div className="flex justify-end">
                            <button
                                className="text-red-700 hover:text-red-500"
                                onClick={closeModal}
                            >
                                <Cancel />
                            </button>
                        </div>
                        <div className="mt-4">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
