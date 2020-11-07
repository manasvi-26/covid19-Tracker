import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    
  let changeableUrl = url;

  if(country){
    changeableUrl = `${url}/countries/${country}`;

  }
  
  try{

        //destructuring data object into confimed,recoverd,...
        const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
        
        const modifiedData = {
        
            confirmed:confirmed,
            recovered:recovered,
            deaths:deaths,
            lastUpdate:deaths
        }

        return (modifiedData)
    } 
    catch(error){
  }
}

//only for US

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
  
      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

  export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {

      console.log(error);
    }
  };