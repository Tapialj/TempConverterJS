$(function () {

  $("#converter").click(convert);


  function convert() {
    let temp = $("#entered-temp").val();
    let returnText;
    console.log(temp);
    //typeof() == number or Number.isFinite(temp)
    if(!Number.isNaN(temp)) {
      if($("input[name=temp]:checked", "#temp-form").val() == "Fahrenheit") {
        returnText = ((temp * (9 / 5)) + 32) + " F";
      }
      else {
        returnText = ((temp - 32) * (5 / 9)) + " C";
      }
    }
    else {
      returnText = "You did not enter a number!";
    }

    $("#result").text(returnText);
  }

});