// Using moment.js to populate the current day
var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do YYYY'))

$(".description").each(function() {
    var currentTime = moment().hour(); 
    var rowHour = $(this).parentsUntil().attr("id")
    // console.log(rowHour)
    if (rowHour < currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    }
    else if (rowHour === currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})


// save button feature 
$(".saveBtn").on("click", function () {
   var description = $(this).siblings(".description").val()
   var time = $(this).parent().attr("id")
//    console.log(description)
    localStorage.setItem(time, description);
})

// for loop to retrieve local storage
for (var i = 9; i < 16; i++) {
    $(`#${i} .description`).val(localStorage.getItem(`${i}`))
}

