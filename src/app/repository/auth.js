import axios from 'axios';

export default class AuthRepository {
    static login(login, password) {
        return axios.post('/v1/auth', {login,password})
    }
}