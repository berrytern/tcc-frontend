'use client';
import {useState, useEffect} from 'react';
// import List  from './list.classification'
import Pagination from 'react-bootstrap/Pagination';
import ProfessorRepository from '@/app/repository/professor'

export function SolicitacaoAluno(props) {
    const [professores, setProfessores] = useState([])
    useEffect(() => { 
        ProfessorRepository.get_all({limit:10}).then(response =>{
            if (response.status === 200) {
                console.log(response.data)
                if (response.data != professores){
                    setProfessores(response.data)
                }
            }
        })
        
    }, [])   // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
    
    
    return (
        <div>
            <div>
                <div>Nome</div>
            </div>
            <div id="">
            {professores.map(item=>(<div>{JSON.stringify(item)}</div>))}
            </div>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}