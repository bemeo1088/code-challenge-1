console.log('js sourced');

$(document).ready(readyNow);

function readyNow() {
  $('#generateBtn').on('click', generateBtnClicked);
  $('.main').on('click', '.swap', swapBtnClicked);
  $('.main').on('click', '.delete', removeBtnClicked);
}

var clickCounter = 0;

function generateBtnClicked() {

  $('.generateBtn').each(function(){
    clickCounter += 1;
  });
  var $div = $('<div class="color"></div>');
  $('.main').append($div);
  $div.append('<p>' + clickCounter + '</p>');
  //$('.main').append('<div><p>' + clickCounter + '</p></div>');
  //var $div = $('.main').append('<div><p>' + clickCounter + '</p></div>');
  $div.append('<button class="swap">Swap</button><button class="delete">Delete</button>');

}

function swapBtnClicked() {
  $('.color').css("background", "yellow");
}

function removeBtnClicked() {
  $(this).parent('div').remove();
}
