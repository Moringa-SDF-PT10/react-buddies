import { useRef, useEffect } from "react";

export default function Modal({isModalOpen, closeModal}) {
    const modalRef = useRef(null);
    useEffect(() => {
        if(isModalOpen) {
            function handleOutsideClick(event) {
                if(modalRef.current && !modalRef.current.contains(event.target)) {
                    closeModal(); // close the modal if anywhere outside the modal is clicked
                }

            }
            function handleEscapeKey(event) {
                if(event.key === 'Escape') {
                    closeModal(); // close the modal on escape key press
                }
            }

            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);

           // cleanup function to remove event listeners
            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
                document.removeEventListener('keydown', handleEscapeKey)
            }
        }
    }, [isModalOpen, closeModal])




    return(
        <div style={{
            zIndex:1000,
            backgroundColor: 'rgba(80, 75, 81, 0.5)',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            position: 'fixed',
            color: 'purple'
            }}>
             <div
                ref={modalRef}
                style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                position: 'relative'
                }}>

            <p>You clicked me!</p>
            </div>

        </div>
    )
}
