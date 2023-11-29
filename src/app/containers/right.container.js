'use client';
import React from 'react';
import styles from '../page.module.css'
import { Professor } from './rightcontainer/professor'

export function RightContainer(props) {
    const page = props.page
    const loadPage = () => {
        switch (page){
            case "professores":
                return <Professor/>
            default:
                return <Professor/>
        }
    }
    return (
        <div className={styles.rightSide}>
            <div>
            
            </div>
            <div>
                {loadPage()}
            </div>
        </div>
    )
}