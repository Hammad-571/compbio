//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 88;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion89()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 88;
    var weight = DecodeNumber('I/dm2GEuK+Y=', 1260, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('I/dm2GEuK+Y=', 1260, -1000, 1000),DecodeDecimal('73xn4EG4LAE=', 1260, -1000, 1000),DecodeDecimal('73xn4EG4LAE=', 1260, -1000, 1000));
    question.answers.length = 0;
    question.num = 89;
    question.isSingleAns = false;
    question.shortTextQuestion = "Riconoscere quanti anni ha uno con le reti neurali";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iuGUe6cagwQ=', 1262, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Supervised";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iuGUe6cagwQ=', 1264, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Unsupervised";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    return question;

}


/* Code generated function */
function ClearQuestion89()
{
    const questionIndex = 88;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);

}






