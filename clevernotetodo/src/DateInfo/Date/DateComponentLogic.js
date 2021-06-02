 export  function culculateDate() {
    const defaultData = {
        date: String(new Date().getDate()),
        month: String(new Date().getMonth()),
        year: String(new Date().getFullYear()),
        hours: String(new Date().getHours()),
        minutes: String(new Date().getMinutes())
    }
    return defaultData   
}

export function getValueDays() {
  Date.prototype.daysInMonth = function() {
		return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
	}
  const days = new Date().daysInMonth();
  const daysValue = [];
  for(let i = 1; i < days;i++){
    daysValue.push(i)
  }
  return daysValue;
}

export function getMonthName() {
  const date = culculateDate();
  const {month} = date;
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let monthName = '';
  for(let i = 1; i < monthNames.length; i++) {
    if(Number(month) === i) {
       monthName = monthNames[i];
    }
  }
  return monthName;
}