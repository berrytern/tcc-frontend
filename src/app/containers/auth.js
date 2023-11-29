"use client";
import React, { useState } from "react";
import styles from '../page.module.css'
import { Login } from './auth/index'

export function Auth(props) {
    const setLogged = props.setLogged
    const [authPage, setAuthPage] = useState("login")

    const getPage = (page) => {
        return <Login className={styles.login} setPage={setAuthPage} setLogged={setLogged}/>
    }

    return (
        <main className={props.logged?styles.mainLogged:styles.mainLogin}>
            {
                props.logged?
                props.children.map(child=>child)
                :
                <header >
                    {getPage(authPage)}
                </header>
            }
        </main>
    )
}