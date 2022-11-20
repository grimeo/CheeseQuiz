// var mainContainer = document.getElementById('main');
// var qDivcounter;

// // var leftBtn = document.getElementsById();
// // var rightBtn = document.getElementsById();

// for(qDivcounter=1;qDivcounter<=10;qDivcounter++){
//     var questionsdiv = document.createElement('div');
//     questionsdiv.setAttribute("class","questionaireDiv");
//     questionsdiv.setAttribute("id","q".concat(qDivcounter));
//     questionsdiv.onclick = function () {changeQuestion(qDivcounter)};
//     questionsdiv.innerHTML = "question" + qDivcounter;
//     mainContainer.appendChild(questionsdiv);
// }
var page = 0;
var btnl = document.getElementById('btnl');
var btnr = document.getElementById('btnr');
var submitbtn = document.getElementById('submitbtn');
 
var qdiv = document.getElementsByClassName('questionaireDiv');

var scoreIterator;

var rightAns = [1,3,1,1,0,1,3,1,1,0]
var currentAns = [0,0,0,0,0,0,0,0,0,0]
var score = 0;

var scoreToDisplay = document.getElementById('score');
var scoreContainer = document.getElementById('scoreContainer')

function changeQuestion(n) {
    let i;
    if((page == 0 && n==-1)||(page==9 && n==+1)){
        n = 0;
    } else {
        page = page + n; 
        page==0 ? btnl.style.display = 'none' : btnl.style.display = 'block';
        //page==9 ? btnr.style.display = 'none' : btnr.style.display = 'block';
        if(page==9){
            btnr.style.display = 'none'
            submitbtn.style.display = 'block';
        } else {
            btnr.style.display = 'block'
            submitbtn.style.display = 'none';
        }
        for (i=0;i<qdiv.length;i++){
            page==i ? qdiv[i].style.display= 'block' : qdiv[i].style.display='none';  
        }
    }
    console.log("log" + page);
}
changeQuestion(page);


function markAnswer(n, classname, qn){
    
    let btnToMark = document.getElementsByClassName(classname);
    let btnToMarkIterator;

    currentAns[qn] = n;
    console.log(currentAns)

    for(btnToMarkIterator=0;btnToMarkIterator<btnToMark.length;btnToMarkIterator++){
        //n==btnToMarkIterator ? btnToMark[btnToMarkIterator].style.backgroundColor = "blue" : btnToMark[btnToMarkIterator].style.backgroundColor = '#e0fbfc';
        if(n==btnToMarkIterator){
            btnToMark[btnToMarkIterator].style.backgroundColor = "white";
            btnToMark[btnToMarkIterator].style.color = "#284b63";
            console.log("blue")
        } else {
            btnToMark[btnToMarkIterator].style.backgroundColor = '#284b63'
            btnToMark[btnToMarkIterator].style.color = "white";
            console.log("green")
        }
    }
}

function checkScore(){
    for(scoreIterator=0; scoreIterator<currentAns.length;scoreIterator++){
        if(currentAns[scoreIterator]==rightAns[scoreIterator]){
            score = score + 1;
            qdiv[9].style.display = 'none';
            scoreContainer.style.display = 'block';
            scoreToDisplay.innerHTML = score;
        }
    }
}