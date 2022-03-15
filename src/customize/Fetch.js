import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'

const useFetch = (url, isCovidData) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [errMessage, setErrorMessage] = useState(false)

    useEffect(() => {

        const ourRequest = axios.CancelToken.source() // <-- 1st step

        function fetchData() {
            try {
                axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                }).then(res => {
                    let data = res && res.data ? res.data : []
                    if (data && data.length > 0 && isCovidData === true) {
                        data.map(item => {
                            item.Date = moment(item.Date).format("DD/MM/YYYY");
                            return item
                        })
                    }
                    setData(data)
                    setLoading(false)
                    setErrorMessage(false)
                })

            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setErrorMessage(true)
                    setLoading(false)
                }
            }
        }
        setTimeout(() => {
            fetchData()
        }, 2000)

        return () => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }

    }, [url])

    return {
        data, loading, errMessage
    }
}

export default useFetch