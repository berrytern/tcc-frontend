import AuthRepository from '../repository/auth'
class AuthService{
    static login(event){
        AuthRepository.login()
    }
}