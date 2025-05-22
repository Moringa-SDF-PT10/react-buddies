import { useEffect, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function Form(){

    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false);
    const [submitCount, setSubmitCount] = useState(0); 
    const lastSubmitted = useRef(''); 

    useEffect(() => {
        if(submitted){
            alert(`You have submitted email: ${email}`)
            localStorage.setItem('email',email);
            toast.success(`Email "${localStorage.getItem('email')}" saved successfully!`);
            setSubmitCount(count => count + 1); 
            lastSubmitted.current = email;
            setSubmitted(false)
        }
    }, [submitted, email])

    return (
        <div>
            <h2>This is our controlled form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Submit</button>
                <span style={{ marginLeft: "10px" }}>Submit Count: {submitCount}</span>
            </form>
            <div style={{ marginTop: "10px" }}>
                Last submitted value: <strong>{lastSubmitted.current}</strong>
            </div>
            <ToastContainer position="top-center"/>
        </div>
    )
}