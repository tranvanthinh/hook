import { useState, useEffect } from 'react';
import useFetch from '../customize/Fetch';
import axios from 'axios';
import moment from 'moment'

const Covid = () => {

    const today = moment().startOf('day').toISOString(true);
    const priorDate = moment().startOf('day').subtract(31, 'day').toISOString(true);

    const { data: dataCovid, loading, errMessage }
        // = useFetch('https://api.covid19api.com/country/vietnam?from=2022-01-01T00:00:00Z&to=2022-02-20T00:00:00Z')
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true)

    return (
        <>
            <h3>Covid 19 tracking in VietNam</h3>
            <table>
                {/* {console.log(".... check", dataCovid)} */}
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {errMessage === false && loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }

                    {loading === true &&
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>Loading...</td>
                        </tr>
                    }

                    {errMessage === true &&
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>Something Wrong...</td>
                        </tr>
                    }
                </tbody>
            </table >
        </>
    )
}

export default Covid