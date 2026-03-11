import React, { useState } from 'react'

const FormValidation = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [fullname, setFullname]=useState("");
    const [emailError, setEmailError]=useState(null);
    const [passwordError, setPasswordError]=useState(null)
    const [fullnameError, setFullNameError]=useState(null);

    const handleFormSubmit = (event)=>{
        //prevent the default form submission behaviour to avoid page reload
        event.preventDefault();
        //validation
        if(email === ""){
            //alert("Email is required");
            setEmailError("Email is required");
            return;
        }
        if(password === ""){
            setPasswordError("password is required");
            return;
        }
        if(password.length<6){
            setPasswordError("Password must be at least 6 character long");
            return;
        }
        if(fullname===""){
            setFullNameError("FullName is required");
            return;
        }
        if(fullname.length<3){
            setFullNameError("Full Name must be at least 3 character long")
        }


        alert(`Email:${email}\n Password:${password}\n Fullname:${fullname}`);
        setEmailError(null);
        setFullNameError(null);
        setPasswordError(null)
        setEmail("");
        setPassword("");
        setFullname("");
        
    }
  return (
    <div>
        <h4>Form Validation</h4>
        <form onSubmit={handleFormSubmit}>
            <div className="form-field">
                <label htmlFor="email">Email</label><br></br>
                <input type="email" placeholder='Enter your valid email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                {emailError && <p style={{color:"red"}}>{emailError}</p>}
            </div>
            <div className="form-field">
                <label htmlFor="password">Password</label><br></br>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                {passwordError && <p style={{color:"red"}}>{passwordError}</p>}

            </div>
            <div className="form-field">
                <label htmlFor="fullname">Full Name</label><br></br>
                <input type="fullname" placeholder='Enter your fullname' value={fullname} onChange={(e)=>setFullname(e.target.value)}  />
                {fullnameError && <p style={{color:"red"}}>{fullnameError}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormValidation