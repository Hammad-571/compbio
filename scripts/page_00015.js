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
	const questionIndex = 14;
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
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('pTjV0dYgjNs=', 1074, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pTjV0dYgjNs=', 1074, -1000, 1000),DecodeDecimal('CSNdk7hGlJQ=', 1074, -1000, 1000),DecodeDecimal('CSNdk7hGlJQ=', 1074, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = "In applicazioni di sorveglianza per ridurre il campo visivo simile a quello umano binoculare  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pTjV0dYgjNs=', 1076, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Occorre impiegare un sistema ottico di circa 90 gradi di Field of view";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LVSr78nCP6M=', 1078, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Occorre impiegare un sistema ottico di circa 135 gradi di Field of view";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xkZ6Y8qk1XQ=', 1080, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Occorre impiegare un sistema ottico di circa 180 gradi di Field of view";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}


/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}






