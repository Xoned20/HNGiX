// JavaScript to update the real-time timestamp, day of the week, and UTC time
function updateData() {
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const utcTimeElement = document.getElementById('utcTime');
    const now = new Date();
    
    // Update day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    dayOfWeekElement.textContent = dayOfWeek;
    
    // Update UTC time in milliseconds
    const utcTime = now.getTime();
    utcTimeElement.textContent = utcTime;
}

// Update the data initially and then every second
updateData();
setInterval(updateData, 1000);