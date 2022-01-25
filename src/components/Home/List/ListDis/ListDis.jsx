import React, { useState, useEffect } from 'react';
import * as api from '../../../../app/api'
import './style.css'

function ListDis({prefCode, prefName, infoCity, setInfoCity}) {
    const [listDis, setListDis] = useState()
    const setChecked = (e,dis) => {
        if(e.target.checked == true){
            setInfoCity([...infoCity,{
                prefCode: prefCode,
                cityCode: dis.cityCode,
                cityName: dis.cityName
            }])
        }
        else {
            var newArrInfoCity= infoCity.filter((city) => city.cityName!== dis.cityName)
            setInfoCity(newArrInfoCity)
        }
    }

    useEffect(() => {
        api.fetchDisWithCity(prefCode) .then((data) => setListDis(data.data.result))
    },[])
    return (
        <div className="listDis">
            {
                listDis?.map((dis,index) =>(
                    <div className="dis" key={index}>
                        <input type="checkbox" onClick={(e) => setChecked(e,dis)}/>
                        <span className="listDisName">{dis.cityName}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ListDis;
