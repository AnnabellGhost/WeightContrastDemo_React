import React from 'react';
import '../styles/skeleton.css';
export default class TodayWeight extends React.Component{
    render(){
        let input;
        console.log(this.props.weights);
        return(
            <div className="offset-by-one column">
                <input
                    type='number'
                    id='todayWeightInput' 
                    ref={node => {input = node}}
                    placeholder="今日体重"    
                />
                
                <button onClick={()=>this.props.addTodayWeight(input.value)}>
                    Confirm
                </button>
                <label>如果你曾记录上月今天的体重值，那么这里将显示变化</label><br/>
            </div>
        );
    }
}