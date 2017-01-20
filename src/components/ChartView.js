import React from 'react';
import '../styles/skeleton.css';
import { createSelector } from 'reselect';
import {connect} from 'react-redux';
class ChartView extends React.Component{
    render(){
        console.log(this.props.twoKilos);
        let path;
        if(this.props.twoKilos.length<=1){path=`M0 0 L100 0`;}
        else{
        let minus=(this.props.twoKilos[0].kilo-this.props.twoKilos[1].kilo)*10;
        console.log(minus);
        if(minus>=0){ path=`M0 0 L100 ${minus}`}
        else{minus=Math.abs(minus);path=`M0 ${minus} L100 0`;}
        }
        return(
            <div>
               <svg className="two columns offset-by-one" >
                 <path d={path} stroke="#ffab18" fill="none" strokeWidth={4}/>
               </svg>
            </div>
        );
    }
}
const weights=(state)=>state.weights;
const today=new Date();
const year=()=>today.getFullYear();
const month=()=>today.getMonth();
const day=()=>today.getDate();
const getTwoKilos=createSelector([weights,year,month,day],
    (weights,year,month,day)=>{
            console.log(weights);
            let unorder= weights.weights.filter((weight)=>{
                if(0<month&&weight.year===year&&weight.month+1===month&&weight.day===day){
                    return true;
                }else if(weight.year+1===year&&weight.month===11&&weight.day===day){
                     return true;
                }else if(weight.year===year&&weight.month===month&&weight.day===day){
                    return true;
                }
                   
            });
            return unorder;
    }
);
function mapStateToProps(state){
  return {
    twoKilos:getTwoKilos(state)
  };
}
export default connect(mapStateToProps)(ChartView);