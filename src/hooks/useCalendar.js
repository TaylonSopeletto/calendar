import { useState, useEffect } from 'react'
import firebase from '../../src/firebase'
import { uuid } from 'uuidv4'

const useCalendar = (year, month) => {

    const [days, setDays] = useState([])

    let list = []


    useEffect(() => {
        const now = new Date()
        firebase.database().ref(`teste/${uuid()}`).set({
            date: `${now.getFullYear()}-${now.getDate()}-${now.getMonth() + 1}`
        })
    }, [])

    useEffect(() => {

        const databaseRef = firebase.database().ref('teste')
        const date = new Date(year, month, 0)

        databaseRef.on('child_added', snap => {
            list.push(snap.val())
            let daysArray = []

            for (let i = 0; i < date.getDate(); i++) {
                daysArray.push({ day: i + 1 })
            }

            for (let i = 0; i < date.getDate(); i++) {
                for (let j = 0; j < list.length; j++) {

                    if (`${year}-${i + 1}-${month}` === list[j].date) {
                        daysArray[i].pin = true
                    }
                }
            }

            setDays(daysArray)

        })
    }, [month, year])

    return { days }
}

export default useCalendar;

