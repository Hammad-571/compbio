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
	const questionIndex = 101;
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
function InitQuestion102()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 101;
    var weight = DecodeNumber('ufZCPfubf5o=', 1443, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ufZCPfubf5o=', 1443, -1000, 1000),DecodeDecimal('mleR+OkvOcQ=', 1443, -1000, 1000),DecodeDecimal('mleR+OkvOcQ=', 1443, -1000, 1000));
    question.answers.length = 0;
    question.num = 102;
    question.isSingleAns = false;
    question.shortTextQuestion = "La rappresentazione di un pixel di una immagine per la biometria non pu� essere a 8 bit (256 livelli di grigio) in quanto troppo compatta";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ufZCPfubf5o=', 1445, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Vero";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7inlt0Xg/po=', 1283, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Falso";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    return question;

}


/* Code generated function */
function ClearQuestion102()
{
    const questionIndex = 101;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);

}






