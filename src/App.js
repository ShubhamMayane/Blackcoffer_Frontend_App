import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

import axios from "axios";



import Table from './Components/Table';
import PieChart from './Components/PieChart';





//for loader perspective



function App() {


  const[dataForChild,setDataForChild]=React.useState([]);


  //state variables for select boxes


  const[years,setYears]=React.useState([]);
  const[topics,setTopics]=React.useState([]);
  const[units,setUnits]=React.useState(["intensity","likelihood","relevance"]);

  //state variable for form tags

  const[year,setYear]=React.useState("");
  const[topic,setTopic]=React.useState("");
  const[unit,setUnit]=React.useState("");

  //for conditional rendering
  const[visible,setVisible]=React.useState(false);


  






  React.useEffect(()=>{


    const fetchData = async () =>{
      
      try {

        
        const resAllYears=await axios.get("https://blackcoffer-backend-app.onrender.com/getAllYears");
        console.log(resAllYears.data);
        setYears(resAllYears.data);

        const resAllTopics=await axios.get("https://blackcoffer-backend-app.onrender.com/getAllTopics");
        console.log(resAllTopics.data);
        setTopics(resAllTopics.data)

        //getting all data
        const resAllData=await axios.get("https://blackcoffer-backend-app.onrender.com/getAllData");
        console.log(resAllData.data);
        setDataForChild(resAllData.data);

       


        

      } catch (error) {
        console.error(error.message);
      }
    
    }
    //calling fetchData
    fetchData();
 },[]);
      
    

 function  handleSubmit(e)
    {   
        e.preventDefault(); // to stop refresh the page
        let inputYear =e.target.year.value;
        let inputTopic=e.target.topic.value;
        let inputUnit=e.target.unit.value;
        console.log(inputYear + " "+inputTopic+" "+inputUnit);//yes we got all data from table


        //input filter
        if(inputYear==""||inputTopic==""||inputUnit=="")
        {
            alert("please select all options");
            return;
        }

        setYear(inputYear);
        setTopic(inputTopic);
        setUnit(inputUnit);
        setVisible(true);
        


    }
  
  
     
  return (
    <div className="App">

{/* {(years.length!=0)? */}
  <div>



  <form onSubmit={handleSubmit} className="myForm">
      
      
      <select name="year" className='form-select'>
          <option value="">Select Year</option>
          {years.map((item)=>{
  
              return (
                  <option value={item}>{item}</option>
              )
  
          })}
      
      </select>
  
    <select name="topic" className='form-select'>
      <option value="">Select Topic</option>
      {topics.map((item)=>{
  
      return (
          <option value={item}>{item}</option>
      )
  
      })}
    </select>
  
    <select name="unit" className='form-select'>
      <option value="">Select Unit</option>
      {units.map((item)=>{
  
          return (
              <option value={item}>{item}</option>
          )
  
      })}
    </select>
  
    
    <input type="submit" className='btn btn-primary' />
  </form>
  
  
  
  
  
  
      {visible==true? <div>
        <PieChart dataFromParent={dataForChild} yearFromParent={year} topicFromParent={topic} unitFromParent={unit}/>
        <hr/>
        <Table dataFromParent={dataForChild} yearFromParent={year} topicFromParent={topic} unitFromParent={unit}/>
      </div>:
       <div class="loader-container">
        <p className="loader-header">Please Select Options</p>
        <span class="loader"></span>
       </div>
      
   }

</div>
      
{/* : 
<div className='pageLoaderContainer'><div class="pageLoader"></div></div>
} */}

 








    </div>








  );
}

export default App;
