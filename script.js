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
var btnr = document.getElementById('btnr')

 
function changeQuestion(n) {
    var i;
    var qdiv = document.getElementsByClassName('questionaireDiv');
    if((page == 0 && n==-1)||(page==9 && n==+1)){
        n = 0;

        
        //page==0 ? btnl.style.display = 'none' : btnl.style.display = 'block';
        //page==9 ? btnr.style.display = 'none' : btnr.style.display = 'block';
    } else {
        page = page + n; 
        page==0 ? btnl.style.display = 'none' : btnl.style.display = 'block';
        page==9 ? btnr.style.display = 'none' : btnr.style.display = 'block';
        for (i=0;i<qdiv.length;i++){
            page==i ? qdiv[i].style.display= 'block' : qdiv[i].style.display='none';  
        }
    }
    console.log("log" + page);
}
changeQuestion(page);