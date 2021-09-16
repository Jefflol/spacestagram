const BASE_URL = 'https://api.nasa.gov'

export const getApodData = async () => {
    try {
        const key = import.meta.env.VITE_NASA_API_KEY
        const url = `${BASE_URL}/planetary/apod?api_key=${key}`

        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch(err) {
        console.error(err)
    }
}