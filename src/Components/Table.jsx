import React from "react";

import mainData from "../data/jsondata.json";
import PieChart from "./PieChart";

import "./Table.css"


function Table(props)
{   

    let tableData=props.dataFromParent; 

    //get all data according to year and topic

    let finalData=props.dataFromParent?.filter((item)=>(item.topic==props.topicFromParent && item.start_year==parseInt(props.yearFromParent) ));

       



   

    return(
    <div>

        <p className="tableHeading">Table View(<b className="tableHeadingTopic">{props.topicFromParent}</b>  {props.yearFromParent})</p>
           
          
            <table className="table table-striped">

            <thead>
                <tr className="table-dark">
                    <th>Intensity</th>
                    <th>Likelihood</th>
                    <th>Relevance</th>
                    <th>Year</th>
                    <th>Country</th>
                    <th>Topics</th>
                    <th >Region</th>
                </tr>
                
            </thead>
                <tbody>

                {
                    finalData.map((item,index)=>(
                                <tr key={index}>
                                <td>{item.intensity}</td>
                                <td>{item.likelihood}</td>
                                <td>{item.relevance}</td>
                                <td>{item.start_year}</td>
                                <td>{item.country}</td>
                                <td>{item.topic}</td>
                                <td>{item.region}</td>
                                 </tr>
                        ))
                }

                    
                </tbody>    
            </table> 


              

    </div>
    );
}

export default Table;