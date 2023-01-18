// Using moment.js to populate the current day
var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do YYYY'))
var time = moment()





// save button feature 
$(".saveBtn").on("click", function () {
    localStorage.setItem($(".hour"), text);
})
