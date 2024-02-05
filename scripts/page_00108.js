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
	const questionIndex = 107;
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
function InitQuestion108()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 107;
    var weight = DecodeNumber('z62tVkSRNrg=', 1611, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('z62tVkSRNrg=', 1611, -1000, 1000),DecodeDecimal('Q5cpamRs104=', 1611, -1000, 1000),DecodeDecimal('Q5cpamRs104=', 1611, -1000, 1000));
    question.answers.length = 0;
    question.num = 108;
    question.isSingleAns = false;
    question.shortTextQuestion = "� possibile selezionare il numero di bit per tono di grigio di un singolo pixel di una immagine di un sensore";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i5QR5LWvQpU=', 1613, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Vero, ma solo per i dispositivi pi� avanzati";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZwESH/iC42w=', 1451, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Falso, non � possibile in nessun tipo di sensore in quanto i dispositivi sono in hw e quindi non modificabili";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    return question;

}


/* Code generated function */
function ClearQuestion108()
{
    const questionIndex = 107;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);

}






