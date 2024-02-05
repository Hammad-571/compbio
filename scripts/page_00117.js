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
	const questionIndex = 116;
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
function InitQuestion117()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 116;
    var weight = DecodeNumber('bXrXTvjhpQ4=', 2004, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bXrXTvjhpQ4=', 2004, -1000, 1000),DecodeDecimal('o1ALmcwvv1s=', 2004, -1000, 1000),DecodeDecimal('o1ALmcwvv1s=', 2004, -1000, 1000));
    question.answers.length = 0;
    question.num = 117;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le tecniche EEG (Electroencephalography)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xmPANneA22M=', 2006, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Nessuna delle precedenti";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    return question;

}


/* Code generated function */
function ClearQuestion117()
{
    const questionIndex = 116;
    ClearMultipleAnswerChoice(questionIndex,0);

}






