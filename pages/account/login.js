import Layout from "../../layout";
import {useState} from "react";
import axios from "axios";

export default function Login() {

    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [succes, setSucces] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    // Handle submit
    const handleSubmit = (e) => {
        // Prevent page from default reload 
        e.preventDefault();
        
        try {
            // Call Login API with data
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
            .then((res) => {
                console.log(res.data);
                setSucces(res.data);
            })
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
            });
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        }

    }


    return (
        <Layout>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input onChange={handleChange} type="email" name="email" placeholder="email" />
                </label>

                <label>
                    <p>Password</p>
                    <input onChange={handleChange} type="password" name="password" placeholder="password" />
                </label>

                <button type="submit">
                    <p>Login</p>
                </button>
            </form>
        </Layout>
    )
}