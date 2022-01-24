import React, { useState, useEffect } from 'react';
import * as api from '../../../../app/api'
import './style.css'

function ListDis({id,prefCode}) {
    const [listDis, setListDis] = useState()


    useEffect(() => {
        api.fetchDisWithCity(prefCode) .then((data) => setListDis(data.data.result))
    },[])
    return (
        <div className="listDis" id={id}>
            {
                listDis?.map((dis,index) =>(
                    <div className="dis" key={index}>
                    <input type="checkbox" />
                        <span className="listDisName">{dis.cityName}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ListDis;
