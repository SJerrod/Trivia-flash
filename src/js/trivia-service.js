export default class FlashCards {
  static getQuestion() {
    return new Promise(function(resolve, reject) {
      let questions = new XMLHttpRequest();
      let url = 'https://opentdb.com/api.php?amount=10&type=multiple';

      questions.onload = function() {
        if (this.status === 200) {
          resolve(questions.response);
        } else {
          reject(questions.response);
        }
      };
      questions.open("GET", url, true);
      questions.send();
    });
  }
}