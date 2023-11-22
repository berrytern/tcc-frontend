import axios from 'axios';

export default class SolicitacaoRepository {
    static get_one(filters){
        const query = '?' + Object.keys(filters).map(item => item+"="+String(filters[item])).join('&')
        return axios.get(process.env.URL+'/v1/solicitacoes/one'+query)
    }
    static get_all(filters){
        const query = '?' + Object.keys(filters).map(item => item+"="+String(filters[item])).join('&')
        return axios.get(process.env.URL+'/v1/solicitacoes'+query)
    }
    static create(login, password) {
        return axios.post(process.env.URL+'/v1/solicitacoes', {login,password})
    }
    static update(aluno_id, professor_id){
        return axios.patch(process.env.URL+`/v1/solicitacoes/${aluno_id}/${professor_id}`)
    }
    static delete(aluno_id, professor_id){
        return axios.delete(process.env.URL+`/v1/solicitacoes/${aluno_id}/${professor_id}`)
    }
}