// Get next month
function availableMonth() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  // today
  var now = new Date();
  // 6 weeks from today
  now.setDate(now.getDate() + 42); // today's date + 42 days
  // get month name from index number
  var future = month[now.getMonth()];
  return future;
}

// Run next availableMonth on .month span
document.querySelector(".month").innerHTML = availableMonth();