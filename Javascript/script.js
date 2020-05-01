$(document).ready(function () { });

//Set today's date
var todayDate = moment().format("dddd" + ", " + "MMMM" + " " + "Do" + ", " + "YYYY");
$("#timeStamp").text(todayDate);
var currentHour = moment().format("HH");
//determining the number of children of the scheduler div (number of hours in the day)
// https://stackoverflow.com/questions/250688/count-immediate-child-div-elements-using-jquery
var scheduleHours = $("#scheduler > div");

//console.log(currentHour);

//loop through the hours
for (i = 0; i < scheduleHours.length; i++) {
    var hour = $(scheduleHours[i]);
    var timeSlot = $(hour).attr("id");
    //see if the hour has passed
    if (parseInt(timeSlot) < currentHour) {
        $("#" + timeSlot).children().children("#calendarEvent").css({ "background-color": "gray" });
        //see if it's the current hour
    } else if (timeSlot === currentHour) {
        $("#" + timeSlot).children().children("#calendarEvent").css({ "background-color": "white" });
    }
};

// set input field value to local storage
// set key to time slot ID
$(".btn").click(function (event) {
    event.preventDefault();
    var inputID = $(this).parent().attr("id");
    var scheduledItem = $(this).parent().children().children("#calendarEvent").val();
    localStorage.setItem(inputID, scheduledItem);
});

//+ ", " + JSON.stringify(

for (x = 9; x < scheduleHours.length + 9; x++) {
    if (x === parseInt(($("#" + x).attr("id")))) {
        $("#" + x).children().children("#calendarEvent").text(localStorage.getItem(x));
    }

}

//}


