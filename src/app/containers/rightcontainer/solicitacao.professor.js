'use client';
import {useState, useEffect} from 'react';
// import List  from './list.classification'
import Pagination from 'react-bootstrap/Pagination';
import AlunoRepository from '@/app/repository/aluno'
import SolicitacaoRepository from '@/app/repository/solicitacao'
import {SolicitacaoItem} from './components/solicitacao.item'
import styles from '../../page.module.css'

export function SolicitacaoProfessor(props) {
    const payload = props.payload
    const [solicitacao, setSolicitacao] = useState([])
    const [description, setDescription] = useState("")
    const [comment, setComment] = useState("")
    const [page, setPage] = useState(1)
    useEffect(() => {
        const refresh = []
        const getData = async () =>{
        const res = await SolicitacaoRepository.get_all({
            id_professor: payload.sub,
            limit:10,
            status: "pending",
            comment, description
        })
        
        if (res.status === 200) {
            for (let item of res.data) {
                const aluno = await AlunoRepository.get_one(item.id_aluno)
                item.name = aluno.data.name
                refresh.push(item)
            }
            setSolicitacao(refresh)
        }
        }
        getData().catch(console.error);
    }, [description,comment])   // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
    
    
    return (
        <div className={styles.content}>
            <div className={styles.listHeader}>
                <input className={styles.name} disabled={true} placeholder='Name'/>
                <input className={styles.description} placeholder='description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                <input className={styles.comment} placeholder='comment' value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
                <input className={styles.action} disabled={true} placeholder='Action'/>
            </div>
            <div className={styles.listItens}>
                {solicitacao.map(item=>SolicitacaoItem(item))}
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