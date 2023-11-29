'use client';
import {useState, useEffect} from 'react';
// import List  from './list.classification'
import Pagination from 'react-bootstrap/Pagination';
import ProfessorRepository from '@/app/repository/professor'
import {ProfessorItem} from './components/professor.item'
import styles from '../../page.module.css'

export function Professor(props) {
    const [professores, setProfessores] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [page, setPage] = useState(1)
    useEffect(() => {
        console.log({limit:10, name, email})
        ProfessorRepository.get_all({limit:10, name, email}).then(response =>{
            if (response.status === 200) {
                console.log(response.data)
                if (response.data != professores){
                    setProfessores(response.data)
                }
            }
        })
        
    }, [name, email])   // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });


    return (
        <div className={styles.content}>
            <div className={styles.listHeader}>
                <input className={styles.name} placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input className={styles.email} placeholder='E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className={styles.listItens}>
                {professores.map(item=>ProfessorItem(item))}
            </div>
            <div className={styles.pagination}>
                <Pagination>
                    <Pagination.First onClick={()=>setPage(1)}/>
                    <Pagination.Prev onClick={()=>page>0?setPage(page-1):null}/>

                    <Pagination.Item>{page}</Pagination.Item>
                    <Pagination.Next onClick={()=>page<100?setPage(page+1):null}/>
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    )
}