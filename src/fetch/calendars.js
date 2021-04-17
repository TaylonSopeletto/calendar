import axios from 'axios'
import baseUrl from './baseUrl'

export const find = data => {

    const request = axios({
        url: `${baseUrl}/calendar/find.php`,
        headers: {
            'Authorization': localStorage.getItem('@calendar-token')
        },
        method: 'GET',
    })

    return request
}

export const merge = data => {

    const request = axios({
        url: `${baseUrl}/calendar/merge.php`,
        headers: {
            'Authorization': localStorage.getItem('@calendar-token')
        },
        method: 'POST',
        data: { ...data }
    })

    return request
}