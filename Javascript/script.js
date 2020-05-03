$(document).ready(function () {});

//Set today's date
var todayDate = moment().format(
  "dddd" + ", " + "MMMM" + " " + "Do" + ", " + "YYYY"
);
$("#timeStamp").text(todayDate);
var currentHour = moment().format("HH");
//determining the number of children of the scheduler div (number of hours in the day)
// https://stackoverflow.com/questions/250688/count-immediate-child-div-elements-using-jquery
var scheduleHours = $("#scheduler > div");
//loop through the hours
for (i = 0; i < scheduleHours.length; i++) {
  var hour = $(scheduleHours[i]);
  var timeSlot = $(hour).attr("id");
  //see if the hour has passed
  //used parseInt to get the integer value of the scheduleHours id
  if (parseInt(timeSlot) < currentHour) {
    $("#" + timeSlot)
      .children("#calendarEvent")
      .css({ "background-color": "gray" });

    //see if it's the current hour
  } else if (timeSlot === currentHour) {
    $("#" + timeSlot)
      .children("#calendarEvent")
      .css({ "background-color": "white" });
  }
}

// set input field value to local storage
// set key to time slot ID
$(".btn").click(function (event) {
  event.preventDefault();
  var inputID = $(this).parent().attr("id");
  var scheduledItem = $(this).parent().children("#calendarEvent").val();
  localStorage.setItem(inputID, scheduledItem);
});

//add items from local storage to the appropriate time slots
//since the key is set to the ID for each text input field, which in turn
//is set to the military timestamp for that hour, the loop needs to start at 9 and go to 17
//hence scheduleHours.length+9
for (x = 9; x < scheduleHours.length + 9; x++) {
  //x needs to equal the value of each time slots id
  if (x === parseInt($("#" + x).attr("id"))) {
    $("#" + x)
      .children("#calendarEvent")
      .text(localStorage.getItem(x));
  }
}

//clear cal function. Clears calendar and reloads page
$("#clearCal").click(function () {
  localStorage.clear();

  //https://www.tutorialrepublic.com/faq/how-to-refresh-a-page-with-jquery.php
  location.reload();
});
