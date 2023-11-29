import axios from 'axios';
import queryParser from './query_parser'


export default class SolicitacaoRepository {
    static get_one(filters){
        const query = queryParser(filters)
        return axios.get('/v1/solicitacoes/one'+query)
    }
    static get_all(filters){
        const query = queryParser(filters)
        return axios.get('/v1/solicitacoes'+query)
    }
    static create(login, password) {
        return axios.post('/v1/solicitacoes', {login,password})
    }
    static update(aluno_id, professor_id){
        return axios.patch(`/v1/solicitacoes/${aluno_id}/${professor_id}`)
    }
    static delete(aluno_id, professor_id){
        return axios.delete(`/v1/solicitacoes/${aluno_id}/${professor_id}`)
    }
}