import axios from 'axios'
import baseUrl from './baseUrl'

export const login = data => {

    const request = axios({
        url: `${baseUrl}/user/login.php`,
        method: 'POST',
        data
    })

    return request
}

export const register = data => {

    const request = axios({
        url: `${baseUrl}/user/create.php`,
        method: 'POST',
        data
    })

    return request
}