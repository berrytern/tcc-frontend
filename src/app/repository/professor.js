import axios from 'axios';

const getQuery = (filters) => {
    return '?' + Object.keys(filters).filter(item=>filters[item]).map(item => item+"="+String(filters[item])).join('&')
}

export default class ProfessorRepository {
    static get_one(filters){
        const query = getQuery(filters)
        return axios.get('/v1/professores/one'+query)
    }
    static get_all(filters){
        const query = getQuery(filters)
        return axios.get('/v1/professores'+query)
    }
    static create(body) {
        return axios.post('/v1/professores', body)
    }
    static update(professor_id){
        return axios.patch(`/v1/professores/${professor_id}`, {login,password})
    }
    static delete(professor_id){
        return axios.delete(`/v1/professores/${professor_id}`, {login,password})
    }
}