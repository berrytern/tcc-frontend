"use client";
import React, { useState } from "react";
import styles from '../page.module.css'
import { Login } from './auth/index'

export function Auth(props) {
    const [authPage, setAuthPage] = useState("login")

    const getPage = (page) => {
        return <Login className='login' setPage={setAuthPage}/>
    }

    return (
        <>
            {
                props.logged?
                props.children.map(child=>child)
                :
                <header className={styles}>
                    {getPage(authPage)}
                </header>
            }
        </>
    )
}