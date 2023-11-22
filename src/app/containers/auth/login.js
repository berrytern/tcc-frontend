import React from "react";
import styles from '../../page.module.css'
import AuthRepository from "@/app/repository/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export function Login(props) {
    const setPage = props.setPage
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        setValidated(true);
    }

    const handlerSubmit = (event)=> {
        event.preventDefault();
        event.stopPropagation();
        
        let login = document.getElementById("login")
        let password = document.getElementById("password")
        AuthRepository.login(login.value, password.value)
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
    }
    return (
        <section className={styles.login} onSubmit={handlerSubmit}>
            <div className={styles.loginForm}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" id="login"/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        </section>
    )
}