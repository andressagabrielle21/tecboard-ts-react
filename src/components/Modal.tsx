function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed top-0 left-0 w-screen h-screen bg-black/70 flex content-center items-center justify-center z-1000" 
            onClick={onClose}>
            <div
                className="flex items-start"
                onClick={(e) => e.stopPropagation()}>
                {children}
                <button className="bg-none text-3xl cursor-pointer" onClick={onClose}>X</button>
            </div>
        </div>
    )
}

export default Modal
