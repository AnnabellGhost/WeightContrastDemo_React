export function addTodayWeight(payload){
const date=new Date();
return {
		type:'ADD_TODAY_WEIGHT',
        kilo:Number(payload),
        year:date.getFullYear(),
        month:date.getMonth(),
        day:date.getDate()
	}
};
