$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

$(".saveBtn").on("click", function () {
  console.log(this);
  var task = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, task);
});
// tried making a loop to do this but dont know how to do it in jquery
$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));

function hourTracker() {
  var currentHour = moment().hour();

  // loop to check hour and adjust schedule accordingly

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("time")[1]);
    console.log(blockHour, currentHour);
    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
hourTracker();
