import React from "react";



import { Chart } from "react-google-charts";




function PieChart(props)
{   
    
    let data=props.dataFromParent;


    let chartTitle="Pie chart ("+props.topicFromParent+" "+props.yearFromParent+")";
    console.log(data);
    
    //  //getting all data of specific topic && specific year
        let finalData=props.dataFromParent?.filter((item)=>(item.topic==props.topicFromParent && item.start_year==parseInt(props.yearFromParent)));

       
        
    
        let dataForPieChart=[["Country",props.unitFromParent]]
    
         finalData?.forEach(element => {
            
             dataForPieChart.push([element.country,element[props.unitFromParent]]);
         });
    
       
        
      




    const options = {
        title: chartTitle,
        is3D:true,
        backgroundColor:"white",
      };
   


    return  (
        
    
     <div>
       


 <Chart
    chartType="PieChart"
    data={dataForPieChart}
    options={{
        title: chartTitle,
        is3D:true,
        backgroundColor:"white",
      }}
    width={"100%"}
    height={"400px"}
  /> 


        </div>


    
    
   )

}


export default PieChart;