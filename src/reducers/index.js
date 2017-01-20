import { combineReducers } from 'redux';
const initialState={
    weights:[
        {kilo:50.5,year:2016,month:11,day:18},
        {kilo:51.5,year:2016,month:10,day:18},
        {kilo:48.5,year:2016,month:11,day:19},
        {kilo:49.5,year:2016,month:11,day:20},
        
    ],
}
function weights(state=initialState,action){
    switch(action.type){
        case 'ADD_TODAY_WEIGHT':
            return Object.assign({},state,{
					weights:[
			{
		        kilo:action.kilo,
                year:action.year,
                month:action.month,
                day:action.day
			}
			,...state.weights]
		});
        
       default:
            return state;
    }
}
const reducers=combineReducers({weights});
export default reducers;