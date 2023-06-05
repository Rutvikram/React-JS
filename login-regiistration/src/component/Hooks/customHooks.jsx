import { useState } from 'react';

const CustomHooks = (intval, initError) => {
    const [inp, setInput] = useState(intval)
    const [error, setError] = useState(initError)
    const handleChange = (e) => {
        // console.log("call custom hook",e);
        // console.log("call custom hook",e.target);
        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        // username error
        if (e.target.name == "username") {
            // console.log("outside condition");
            if (e.target.value == "") {
                let SpanId = [e.target.name] + "";
                // console.log("inside condition",SpanId);
                // setError((error)=>({ ...error, [e.target.name] : "This fild is required !" }))
                setError((error)=>({ ...error, "usernameError" : "This fild is required !" }))
                console.log("inside condition reqaid ",[e.target.name]);
                
                
            } else {
                setError((error)=>({ ...error, [e.target.name] : "" }))
                // setError({ ...error, usernameError: "" })
            }

        }
        // password error
        if (e.target.name == "password") {
            if (e.target.value == "") {
                // setError({ ...error, "passwordError": "This fild  is required !" })
                setError((error)=>({ ...error,"passwordError" : "This fild is required !" }))
            } else {
                setError((error)=>({ ...error,"passwordError" : "" }))
                // setError({ ...error, "passwordError": "" })
            }

        }

    }
    return {
        handleChange,
        inp,
        error
    };



};

export default CustomHooks;