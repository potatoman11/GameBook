
$(document).ready(function(){

  $('.jumbotron').click(function(){

    var colorArray = ["#10edcc", "#065c82", "#62ea07", "#ffe716", "#ff1673", "#540b9e"]

    var rng = Math.random();
    rng = rng * 10 / 2;
    rng = Math.round(rng);

    console.log(rng);

    $(this).css('background-color', colorArray[rng] );
  });




});
//closes document.ready()
