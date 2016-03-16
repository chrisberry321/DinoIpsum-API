$(document).ready(function(){
  $('#ipsum').submit(function(event){
    event.preventDefault();
    var words = $('#words').val();
    var paragraphs = $('#paragraphs').val();
    // console.log('hello');
    $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + words).then(function(response) {
      $('.new-ipsum').append(response);

    });
  });
});
