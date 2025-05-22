import { useEffect, useRef, useState } from "react"
import Modal from "./Modal";

export default function Home(){

    const [count, setCount] = useState(0);
    const prevCount = useRef(0)

    const inputRef = useRef(null)

    const [isModalOpen, setIsModalOpen] = useState(false)

    //function to open the modal
    const openModal = () => {
        setIsModalOpen(true)
    }

    //function to close the modal
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleClick = () => {
        inputRef.current?.focus()
        openModal()
    }

    const increaseCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        prevCount.current = count
    }, [count])

    return (
        <div>
            <h2>Welcome to the React Buddies page</h2>
            <p>This is a live collaborative demo for useRef hook:</p>
            <input ref={inputRef} placeholder="Check me out" />
            <button onClick={handleClick}>Click Me</button>
            <div>
                <p>Current Count: {count}</p>
                <p>Previous Count: {prevCount.current}</p>
            <button onClick={increaseCount} >Increase button count</button>
            </div>
           {isModalOpen && <Modal isModalOpen ={isModalOpen} closeModal={closeModal}/>}


        </div>
    )
}
