
$(document).ready(function(){

  $('.jumbotron').click(function(){

    var colorArray = ["red", "orange", "yellow", "turquoise", "blue", "purple"]

    var rng = Math.random();
    rng = rng * 10 / 2;
    rng = Math.round(rng);

    console.log(rng);

    $(this).css('background-color', colorArray[rng] );
  });




});
//closes document.ready()
