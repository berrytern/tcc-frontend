'use client';
import styles from '../page.module.css'
import Tab from 'react-bootstrap/Tab';
import { Aluno } from './rightcontainer/aluno';
import { Professor } from './rightcontainer/professor';
import { SolicitacaoAluno } from './rightcontainer/solicitacao.aluno';
import { SolicitacaoProfessor } from './rightcontainer/solicitacao.professor';
import { useState, useEffect } from 'react';


export function LeftBar(props) {
    const userType = props.userType
    const setPage = props.setPage
    const setLogged = props.setLogged
    const [content, setContent] = useState(null)

    useEffect(() => { 
        if (!content) {
            switch (userType) {
                case "aluno": return setContent("solicitacoes_aluno")
                case "professor": return setContent("aluno")
                case "gestor": return setContent("professor")
            }
        }
        
    }, [])

    const getContent = () => {
        switch (content) {
            case "aluno": return <Aluno/>
            case "professor": return <Professor/>
            case "solicitacoes_aluno": return <SolicitacaoAluno  payload={props.payload}/>
            case "solicitacoes_prof": return <SolicitacaoProfessor payload={props.payload}/>
        }
    }

    const getNav = () => {
        switch (userType) {
            case "aluno": return (
                <><div className={styles.selection} >
                    <button className={content==="professor"?styles.active:undefined} onClick={()=>setContent("professor")} active={content=="professor"}>Professores</button>
                </div><div className={styles.selection}>
                    <button className={content==="solicitacoes_aluno"?styles.active:undefined} onClick={()=>setContent("solicitacoes_aluno")}>Solicitações</button>
                </div></>
            )
            case "professor": return (
                <><div className={styles.selection}>
                    <button onClick={()=>setContent("aluno")}>Alunos</button>
                </div><div className={styles.selection}>
                        <button onClick={()=>setContent("solicitacoes_prof")}>Solicitações</button>
                </div></>
            )
            case "gestor": return (
                <><div className={styles.selection}>
                    <button className={content==="professor"?styles.active:undefined} onClick={()=>setContent("professor")} a={content==="professor"}>Professores</button>
                </div><div className={styles.selection}>
                        <button className={content==="aluno"?styles.active:undefined} onClick={()=>setContent("aluno")} active={content==="aluno"}>Alunos</button>
                </div></>
            )
        }
    }
    return (
        <div className={styles.leftSide}>
            <div className={styles.leftColumn}>
                <img alt='icon' width={160} height={60} src="https://seeklogo.com/images/U/universidade-estadual-da-paraiba-uepb-logo-3B03A51FE6-seeklogo.com.png"/>
                {getNav()}
            </div>
            <div className={styles.rightColumn}>
                {getContent()}
            </div>
            <div className={styles.logout}>
                <button onClick={()=>{localStorage.removeItem("token"); setLogged(false)}}>Logout</button>
            </div>
        </div>
    )
}