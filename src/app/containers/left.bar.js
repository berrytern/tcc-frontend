'use client';
import React from 'react';
import styles from '../page.module.css'

export function LeftBar(props) {
    const userType = props.userType
    const setPage = props.setPage
    return (
    <div className={styles.leftSide}>
        <div className={styles.leftTopBar}>
        <div>
        </div>
        <div>
        
        </div>
        </div>
        <div className={styles.selectionBar}>
        <div onClick={(evt)=>setPage("category")}>
            Categorias
        </div>
        <div onClick={(evt)=>setPage("pauta")}>
            Pautas
        </div>
        <div onClick={(evt)=>setPage("monitor")}>
            Monitoring
        </div>
        </div>
    </div>
    )
}