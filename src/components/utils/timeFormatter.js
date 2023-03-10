export const timeFormatter = (datetime) => {

    const formattedDateTime = new Date(datetime).toLocaleString([], {
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })

    return formattedDateTime
}