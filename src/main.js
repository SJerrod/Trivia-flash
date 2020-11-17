import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import './js/trivia-service.js';
import FlashCards from './js/trivia-service.js';

function displayQuestion(body) {
  $('.card-text').text(`${body.results[0].question}`);
  $('#answer1').text(`${body.results[0].incorrect_answers[2]}`);
  $('#answer2').text(`${body.results[0].correct_answer}`);
  $('#answer3').text(`${body.results[0].incorrect_answers[0]}`);
  $('#answer4').text(`${body.results[0].incorrect_answers[1]}`);
}

$(document).ready(function() {
  $('#question1').click(function() {
    let promise = FlashCards.getQuestion();
    console.log(promise);
    promise.then(function(response) {
      const body = JSON.parse(response);
      displayQuestion(body);
    }, function(error) {
      $('.card-text').text(`There was an error: ${error}`);
    });
  });
});