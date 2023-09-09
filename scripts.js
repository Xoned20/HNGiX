function updateData() {
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const utcTimeElement = document.getElementById('utcTime');
    const now = new Date();
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    dayOfWeekElement.textContent = dayOfWeek;
    
    const utcTime = now.getTime();
    utcTimeElement.textContent = utcTime;
}

updateData();
setInterval(updateData, 1000);