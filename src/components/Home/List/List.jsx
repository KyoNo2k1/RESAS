import React, { useState, useEffect } from 'react';
import './style.css'

import * as api from '../../../app/api'
import ListDis from './ListDis/ListDis';

function List({infoCity,setInfoCity}) {
    const [listCities, setListCities] = useState()

    useEffect(() => {
        api.fetchCities().then(data => setListCities(data.data.result))
    },[])
    return (
        <div className="list">
            <h2 className="listHeader">日本の都市のリスト</h2>
            <div className="listCity">
            {
                listCities?.map((city, index) => (
                    <div className="city" key={index}>
                        <h4 className="listCityName">{city.prefName}</h4>
                        <ListDis prefCode={city.prefCode} prefName={city.prefName} infoCity={infoCity} setInfoCity={setInfoCity}/>
                    </div>

                ))
            }
            </div>
        </div>
)
}

export default List;
