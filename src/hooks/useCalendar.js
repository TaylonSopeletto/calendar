import axios from 'axios'
import { useState, useEffect } from 'react'
import { uuid } from 'uuidv4'

const useCalendar = (year, month, id, reload) => {

    const [days, setDays] = useState([])

    const convertDecimal = number => {
        if (number < 10) {
            return `0${number}`
        } else {
            return number
        }
    }

    const fetchDays = () => {

        const date = new Date(year, month, 0)
        let daysArray = []


        axios({
            method: 'GET',
            url: `http://localhost/api/plan/find.php?calendarId=${id}`,
            headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYjcwZGU3Ni0wNTg4LTRkOWMtOGIyMS0xNjQyNDk4NzYyZTQifQ==.2yZCxWpYimEhRMHEhgx9+dGksY/ZdUns4+hKnEH1Qu0=' }
        })
            .then(result => {

                for (let i = 0; i < date.getDate(); i++) {
                    daysArray.push({ day: i + 1 })
                }

                for (let i = 0; i < date.getDate(); i++) {
                    for (let j = 0; j < result.data.length; j++) {

                        if (`${year}-${convertDecimal(month)}-${convertDecimal(i + 1)}` === result.data[j].date) {
                            daysArray[i].pin = true
                            daysArray[i].id = result.data[j].id
                            daysArray[i].date = result.data[j].date
                            daysArray[i].name = result.data[j].name
                            daysArray[i].description = result.data[j].description
                        }
                    }
                }

                setDays(daysArray)
            })
    }

    useEffect(() => {
        fetchDays()
    }, [month, year, reload])

    return { days }
}

export default useCalendar;

