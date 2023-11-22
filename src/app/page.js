'use client';
import './App.scss';
import axios from 'axios';
import { useState } from 'react';
import styles from './page.module.css'
import {Auth, LeftBar, RightContainer} from './containers'

export default function Home() {
  axios.defaults.baseURL = 'http://localhost:8080'
  
  const [logged, setLogged] = useState(false)
  const [userType, setUserType] = useState("professor")
  const [page, setPage] = useState("professores")

  return (
    <main className={styles.main}>
      <Auth logged={logged} setLogged={setLogged} setUserType={setUserType}>
        <LeftBar page={page} setPage={setPage} userType={userType}/>
        <RightContainer page={page}/>
      </Auth>
    </main>
  )
}
