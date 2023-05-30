import { useState } from 'react';

const CustomHooks = (intval,initError) => {
    const [inp,setInput]= useState(intval)
    const [error, setError]= useState(initError)
    const handleChange = (e) =>{
        // console.log("call custom hook",e);
        // console.log("call custom hook",e.target);
        setInput((inp) => ({...inp, [e.target.name]:e.target.value}))
        // username error
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setError({...error, "usernameError":"username is required !"  })
            }else{
                setError({ ...error,"usernameError" :"" })
            }
            
        }
        // password error
        if (e.target.name == "password") {
            if (e.target.value == "") {
                setError({...error, "passwordError":"password is required !"  })
            }else{
                setError({ ...error,"passwordError" :"" })
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