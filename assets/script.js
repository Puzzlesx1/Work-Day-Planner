var rows = document.getElementsByClassName("calendar");
console.log(rows);
var currentHour = parseInt(moment().format('H'));
console.log(currentHour);
var button = document.getElementsByClassName("btn");

/*inputting Time*/
function date () {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#date').html(time);
    setTimeout(date, 1000);
};

$(document).ready(function(){date();});
console.log(rows.length);
/* changing background colors*/
for (i = 0; i < rows.length; i++)
{
    if(rows[i].id == currentHour)
    {
      rows[i].style.backgroundColor = 'red';
    }
    else if (rows[i].id < currentHour)
    {
        rows[i].style.backgroundColor = 'grey';
    }
    else {
        rows[i].style.backgroundColor = 'rgb(0, 194, 0)';
    }
    console.log(rows[i].id)
    console.log(currentHour)
};

/*save to local storage*/
$(".btn").on("click", function () {
    var text = $(this).siblings(".input-align").children(".calendar").val();
    var time = $(this).siblings(".time").text();

    localStorage.setItem(time, text);
    console.log(text);
    console.log(time);
});

/*retrieve anything from local storage*/
$(document).ready(function() {
$("#9").val(localStorage.getItem("9 AM"));
    $("#10").val(localStorage.getItem("10 AM"));
    $("#11").val(localStorage.getItem("11 AM"));
    $("#12").val(localStorage.getItem("12 PM"));
    $("#13").val(localStorage.getItem("1 PM"));
    $("#14").val(localStorage.getItem("2 PM"));
    $("#15").val(localStorage.getItem("3 PM"));
    $("#16").val(localStorage.getItem("4 PM"));
    $("#17").val(localStorage.getItem("5 PM"));
});

/*clear local storage*/
$(".btn1").on("click", function () {
    localStorage.clear();
    alert("Please refresh page!");
});