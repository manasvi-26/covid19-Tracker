import React from 'react';

import { Cards, Chart, CountryPicker } from './components'


import styles from './App.module.css';

import {fetchData} from './api';

import image from './images/image.png';


class App extends React.Component{
    //no need for constructor
    state = {
        data:{}
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data : fetchedData});
    }

    render(){
        //destructuring again (got rid of this.state in <Cards />)
       
        const {data} = this.state;
        console.log(data);
        return(
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <br/><br/>
                <Cards data = {data}/>
                <br/><br/>
                <CountryPicker /> 
                <br/><br/>
                <Chart />
            </div>
        )
    }
}

export default App;
