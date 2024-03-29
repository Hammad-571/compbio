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
	const questionIndex = 55;
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
function InitQuestion56()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 55;
    var weight = DecodeNumber('x0R3Ho9cRRc=', 1467, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x0R3Ho9cRRc=', 1467, -1000, 1000),DecodeDecimal('JWg0oREWIjg=', 1467, -1000, 1000),DecodeDecimal('JWg0oREWIjg=', 1467, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = false;
    question.shortTextQuestion = "I 10 bit per pixel rispetto agli 8 bit per pixel cosa permette";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eL7n9dLATsE=', 1469, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Distinguere rumore e filtrarlo meglio";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    return question;

}


/* Code generated function */
function ClearQuestion56()
{
    const questionIndex = 55;
    ClearMultipleAnswerChoice(questionIndex,0);

}






