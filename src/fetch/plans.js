import axios from 'axios'
import baseUrl from './baseUrl'

export const getByDate = data => {
    const request = axios({
        url: `${baseUrl}/plan/getByDate.php`,
        headers: {
            'Authorization': localStorage.getItem('@calendar-token')
        },
        method: 'GET',
        params: { ...data }
    })

    return request
}

export const find = data => {
    const request = axios({
        url: `${baseUrl}/plan/find.php`,
        headers: {
            'Authorization': localStorage.getItem('@calendar-token')
        },
        method: 'GET',
        params: { ...data }
    })

    return request
}