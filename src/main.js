import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './js/trivia.js';
// import { FlashCards } from './js/trivia.js';

$(document).ready(function() {
  $('#question1').click(function(event) {
    event.preventDefault();

    let questions = new XMLHttpRequest();
    let url = 'https://opentdb.com/api.php?amount=10&type=multiple';

    questions.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        displayQuestion(response);
      }
    };

    questions.open("GET", url, true);
    questions.send();
    
    function displayQuestion(response) {
      $('.card-text').text(`${response.results[0].question}`);
      $('#answer1').text(`${response.results[0].incorrect_answers[2]}`);
      $('#answer2').text(`${response.results[0].correct_answer}`);
      $('#answer3').text(`${response.results[0].incorrect_answers[0]}`);
      $('#answer4').text(`${response.results[0].incorrect_answers[1]}`);
    }
  });
});