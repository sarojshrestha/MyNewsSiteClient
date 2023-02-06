import { useState } from "react";
import axios from 'axios';

const Register = ()=>{
    const [name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[secret,setSecret]=useState('');
const handleSubmit= (e) => {
    e.preventDefault();
    //console.log(name,email,password,secret);
    axios.post('http://localhost:3000/api/register',{
        name,email,password,secret
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}
    return(
        <div className="container-fluid">
            <div className="row py-5 bg-secondary text-light">
                <div className="col text-center">
                    <h1>Register Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 py-5 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <label className="text-muted">Your Name</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Enter Name"/>
                        </div>

                        <div className="form-group p-2">
                            <label className="text-muted">Email</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter Email"/>
                        </div>

                        <div className="form-group p-2">
                            <label className="text-muted">Password</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter Password"/>
                        </div>
                        <div className="form-group p-2">
                            <small>
                                <label className="text-muted">Pick a question</label>
                            </small>
                            <select className="form-control p-2">
                                <option>What is your favourite color?</option>
                                <option>What is your best friend?</option>
                                <option>What city you were born?</option>
                            </select>
                            <small className="form-text text-muted">
                                you can use this to reset your password
                            </small>
                        </div>
                        <div className="form-group p-2">
                            <input value={secret} onChange={(e)=>setSecret(e.target.value)} type="text" className="form-control" placeholder="Write your answer here"></input>
                        </div>
                        <button className="btn btn-primary col-12">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;