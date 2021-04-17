export const convertDate = date => {
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}