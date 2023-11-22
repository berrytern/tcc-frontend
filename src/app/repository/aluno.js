import axios from 'axios';

export default class AlunoRepository {
    static get_one(filters){
        const query = '?' + Object.keys(filters).map(item => item+"="+String(filters[item])).join('&')
        return axios.get(process.env.URL+'/v1/alunos/one'+query)
    }
    static get_all(filters){
        const query = '?' + Object.keys(filters).map(item => item+"="+String(filters[item])).join('&')
        return axios.get(process.env.URL+'/v1/alunos'+query)
    }
    static create(body) {
        return axios.post(process.env.URL+'/v1/alunos', body)
    }
    static update(professor_id){
        return axios.patch(process.env.URL+`/v1/alunos/${professor_id}`, {login,password})
    }
    static delete(professor_id){
        return axios.delete(process.env.URL+`/v1/alunos/${professor_id}`, {login,password})
    }
}