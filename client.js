console.log('js sourced');

$(document).ready(readyNow);

function readyNow() {
  $('#generateBtn').on('click', generateBtnClicked);
}

var clickCounter = 0;

function generateBtnClicked() {

  $('.generateBtn').each(function(){
    clickCounter += 1;
  });
  $('.main').append('<div><p>' + clickCounter + '</p></div>');
}
