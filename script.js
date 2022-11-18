var mainContainer = document.getElementById('main');
var counter;

for(counter=1;counter<=10;counter++){
    var qestionsdiv = document.createElement('div');
    qestionsdiv.setAttribute("class","questionaireDiv");
    qestionsdiv.setAttribute("id","q".concat(counter));
    qestionsdiv.innerHTML = "question" + counter;
    mainContainer.appendChild(qestionsdiv);
}