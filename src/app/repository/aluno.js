import axios from 'axios';
import queryParser from './query_parser'


export default class AlunoRepository {
    static get_one(id){
        return axios.get(`/v1/alunos/${id}`)
    }
    static get_all(filters){
        const query = queryParser(filters)
        return axios.get('/v1/alunos'+query)
    }
    static create(body) {
        return axios.post('/v1/alunos', body)
    }
    static update(professor_id){
        return axios.patch(`/v1/alunos/${professor_id}`, {login,password})
    }
    static delete(professor_id){
        return axios.delete(`/v1/alunos/${professor_id}`, {login,password})
    }
}