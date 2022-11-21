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
    // if(page == 0 && n==-1){
    //     n=0;
    //     btnl.style.display = 'none';
    // } else if (page==9 && n==+1){
    //     n=0;
    //     btnr.style.display = 'none';
    //     submitbtn.style.display = 'block';
    // } else {
    //     page = page + n; 
    //     for (i=0;i<qdiv.length;i++){
    //         page==i ? qdiv[i].style.display= 'block' : qdiv[i].style.display='none';
    //     }
    //     if (page==9){
    //         btnr.style.display = 'none';
    //         btnr.style.visibility = 'hidden';
    //         submitbtn.style.display = 'block';
    //     } 
    //}

    if((page == 0 && n==-1)||(page==9 && n==+1)){
        n = 0;
    } else {
        page = page + n; 
        page==0 ? btnl.style.display = 'none' : btnl.style.display = 'block';
        //page==9 && n==+1 ? btnr.style.display = 'none' : btnr.style.display = 'block';
        console.log(page)
        if(page==9){
            let newbtnrclass = document.getElementsByClassName('lastbtnr');
            newbtnrclass[0].style.display = 'none';
            submitbtn.style.display = 'block';
        } else {
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

function restart(){
    location.reload();
}