'use client';
import React from 'react';
// import List  from './list.classification'
import styles from '../page.module.css'
import { Solicitacao } from './'

export function RightContainer(props) {
    const page = props.page
    const loadPage = () => {
        switch (page){
            case "solicitacao":
                return <Solicitacao/>
            default:
                return <Solicitacao/>
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