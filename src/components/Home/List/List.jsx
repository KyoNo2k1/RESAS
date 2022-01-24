import React, { useState, useEffect } from 'react';
import './style.css'

import * as api from '../../../app/api'
import ListDis from './ListDis/ListDis';

function List() {
    const [listCities, setListCities] = useState()

    useEffect(() => {
        api.fetchCities().then(data => setListCities(data.data.result))
    },[])
    return (
        <div className="list">
            <h2 className="listHeader">Danh sách các thành phố tại Nhật Bản</h2>
            <div className="listCity">
            {
                listCities?.map((city, index) => (
                    <div className="city" key={index}>
                        <h4 className="listCityName">{city.prefName}</h4>
                        <ListDis prefCode={city.prefCode} prefName={city.prefName}/>
                    </div>

                ))
            }
            </div>
        </div>
)
}

export default List;
