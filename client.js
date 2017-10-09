console.log('js sourced');

$(document).ready(readyNow);

function readyNow() {
  $('#generateBtn').on('click', generateBtnClicked);
}

function generateBtnClicked() {
    $('.main').append('<div></div>');
}
