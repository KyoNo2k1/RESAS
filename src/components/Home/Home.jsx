import React from 'react';
import './style.css'
import Chart from './Chart/Chart';
import List from './List/List';

function Home() {

    return(
        <div className="home">
            <List />
            <Chart/>
        </div>
    )
}

export default Home;
