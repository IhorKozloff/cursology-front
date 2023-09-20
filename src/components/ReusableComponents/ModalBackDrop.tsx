import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface IProps {
    children?: ReactNode;
    backDropAction?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const ModalWindowBackdrop = ({children, backDropAction}: IProps) => {
    
    const modalBackdropRoot = document.querySelector('#modal-backdrop-root') as HTMLDivElement;

    const handleBackDropCLick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (backDropAction) {
            backDropAction(event);
        }
    };
    
    return createPortal (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-Black/60 z-40" onClick={handleBackDropCLick}>
            {children}
        </div>, modalBackdropRoot
    );
};