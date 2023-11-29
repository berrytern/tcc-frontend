'use client';
import './App.scss';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './page.module.css'
import {Auth, LeftBar, RightContainer} from './containers'
import jwt from 'jsonwebtoken'

export default function Home() {
  axios.defaults.baseURL = 'http://localhost:8080'
  const [logged, setLogged] = useState(false)
  const [userType, setUserType] = useState("professor")
  const [payload, setPayload] = useState(null)
  const [page, setPage] = useState("gestor")
  useEffect(() => {
    // Perform localStorage action
    if(localStorage.getItem("token") && !logged){
      const payload = jwt.decode(localStorage.getItem('token'), { complete: true }).payload
      setPayload(payload)
      setUserType(payload.sub_type)
      setLogged(true)
    }
    
  }, [])
  

  return (
      <Auth logged={logged} setLogged={setLogged} setUserType={setUserType}>
        <LeftBar page={page} setPage={setPage} userType={userType} payload={payload} setLogged={setLogged}/>
        <></>
      </Auth>
  )
}
