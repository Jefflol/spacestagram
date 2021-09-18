const BASE_URL = 'https://api.nasa.gov'

export const getApodData = async () => {
    try {
        const key = import.meta.env.VITE_NASA_API_KEY
        const url = `${BASE_URL}/planetary/apod?api_key=${key}&thumbs=true`

        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch(err) {
        console.error(err)
    }
}

export const getApodDataWithRange = async (startDate, endDate) => {
    try {
        const key = import.meta.env.VITE_NASA_API_KEY
        const url = `${BASE_URL}/planetary/apod?api_key=${key}&thumbs=true&start_date=${startDate}&end_date=${endDate}`

        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch(err) {
        console.error(err)
    }
}

export const debounce = (fn, delay) => {
    let timer
    return function() {
        let context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, arguments)
        }, delay)
    }
}