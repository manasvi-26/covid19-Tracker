import React from 'react';

import { Cards, Chart, CountryPicker } from './components'


import styles from './App.module.css';

import {fetchData} from './api';

import image from './images/image.png';


class App extends React.Component{
    //no need for constructor
    state = {
        data:{},
        country:''
    }
    //to get global data
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data : fetchedData});
    }

    //to get data of a specific country
    handleCountryChange = async(country) =>{
        
        const fetchedData = await fetchData(country);
        
        console.log(country);
        console.log(fetchedData);

        this.setState({data : fetchedData , country : country});
    }

    render(){
        //destructuring again (got rid of this.state in <Cards />)
       
        const {data, country} = this.state;
        console.log(data);
        return(
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <br/><br/>
                <Cards data = {data}/>
                <br/><br/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/> 
                <br/><br/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;
