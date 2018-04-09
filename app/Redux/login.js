export const LOGIN = 'login/LOGIN'
export const LOGIN_SUCESSO = 'login/LOGIN_SUCESSO'
export const LOGIN_FALHOU = 'login/LOGIN_FALHOU'

const initialState = {
        status: 'initial',
        email: '',
        senha: ''
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN:
            return {
                status: 'esperando',
                email: action.payload.email,
                senha: action.payload.senha
            }
        case LOGIN_SUCESSO:
            return {
                status: 'sucesso',
            }
        case LOGIN_FALHOU:
            return {
                status: 'falhou',
            }
        default:
            return state
    }
}

export function login({email, senha}) {
    return {
        type: LOGIN,
        payload: {
            email,
            senha
        }
    }
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCESSO,
    }
}

export function loginFail() {
    return {
        type: LOGIN_FALHOU,
    }
}
