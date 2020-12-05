// Code for the day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {

        // Get values of the description
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    });
});

    function timeTracker() {
        //get hours
        var timeNow = moment().hour();

        //creating loop for time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("time")[1]);

            //checking time and adding the classes
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

        // getItem from local storage
        $("#time8 .description").val(localStorage.getItem("time8"));
        $("#time9 .description").val(localStorage.getItem("time9"));
        $("#time10 .description").val(localStorage.getItem("time10"));
        $("#time11 .description").val(localStorage.getItem("time11"));
        $("#time12 .description").val(localStorage.getItem("time12"));
        $("#time13 .description").val(localStorage.getItem("time13"));
        $("#time14 .description").val(localStorage.getItem("time14"));
        $("#time15 .description").val(localStorage.getItem("time15"));
        $("#time16 .description").val(localStorage.getItem("time16"));
        $("#time17 .description").val(localStorage.getItem("time17"));
        //returning time tracker function
        timeTracker();
    