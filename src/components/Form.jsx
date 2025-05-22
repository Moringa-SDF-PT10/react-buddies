import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"



export default function Form(){

    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if(submitted){
            alert(`You have submitted email: ${email}`)
          localStorage.setItem('email',email);
          toast.success(`Email "${localStorage.getItem('email')}" saved successfully!`);
            setSubmitted(false)
        }
    }, [submitted, email]) // React will render on every character change. BONUS: Improve this approach

    return (
        <div>
            <h2>This is our controlled form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ToastContainer position="top-center"/>


        </div>
    )
}


