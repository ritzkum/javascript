const flashcards = document.getElementsByClassName("flashCards")[0];
const CreatBox = document.getElementsByClassName("container")[0];
const Question = document.getElementById("Question");
const Answer = document.getElementById("Answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) :[];

function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML ='';
    contentArray =[];

}
function hideCreateBox(){
    CreatBox.style.display ="none";
}
function showCreateBox(){
    CreatBox.style.display ="";
}

contentArray.forEach(divMaker);
function divMaker(text){
    var div = document.createElement("div");
    var h2_Question = document.createElement("h2");
    var h2_Answer = document.createElement("h2");

    div.className='flashcards';
    h2_Question.setAttribute('style',"border-top:1px solid red; padding:15px;margin-top:30px");
    h2_Question.innerHTML = text.my_question;

    h2_Answer.setAttribute('style',"text-align:center; display:none; color:red");
    h2_Answer.innerHTML = text.my_answer;

    div.appendChild(h2_Question);
    div.appendChild(h2_Answer);

    div.addEventListener("click",function(){
        if(h2_Answer.style.display=="none")
        h2_Answer.style.display="block";
        else
        h2_Answer.style.display= "none";
    });

    flashcards.appendChild(div);
}

function addFlashcard(){
    var flashcard_info ={
        'my_question':Question.value,
        'my_answer':Answer.value
        
    }
    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    Question.value ='';
    Answer.value ='';

}


