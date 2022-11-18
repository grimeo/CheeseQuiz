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

function changeQuestion(n) {
    var i;
    var qdiv = document.getElementsByClassName('questionaireDiv');
    
    if((page == 0 && n==-1)||(page==9 && n==+1)){
        n = 0;
        page = page;
    } else {
        page = page + n; 
        for (i=0;i<qdiv.length;i++){
            page==i ? qdiv[i].style.display= 'block' : qdiv[i].style.display='none';  
        }
    }
    
    console.log("log");
}
changeQuestion(page);