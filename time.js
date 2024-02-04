// time.js
function updateTime() {
    // Create a Date object set to the timezone of Stavanger, Norway
    let stavangerTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Oslo"});
    // Format the time
    stavangerTime = new Date(stavangerTime).toLocaleTimeString();
    
    // Update the div content
    document.getElementById('stavangerTime').innerHTML = `${stavangerTime}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize with the correct time
updateTime();