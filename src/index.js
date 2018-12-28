const showHeader = () => {
  console.log('Welcome to the Brain Games!');
};

const showTask1 = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log(' ');
};

const askEven = () => {
  const attempts = 3;
  const maxNumber = 100;

  const userName = require('readline-sync').question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(' ');

  const iter = (count) => {
    if (count === attempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    console.log(`Question: ${randomNumber}`);

    const rightAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    const userAnswer = require('readline-sync').question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    }
  };
  iter(0);
};

export { showHeader, showTask1, askEven };
