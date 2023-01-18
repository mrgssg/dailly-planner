// Using moment.js to populate the current day
var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do YYYY'))





// save button feature 
$(".saveBtn").on("click", function () {
    var text = $(this).append("discription").val();
    localStorage.setItem($(".hour"), text);
})
