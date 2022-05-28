var titulliLende=document.getElementById('titulliLenda');
console.log(titulliLendes);
titulliLendes.textContent='WEB Enginering';
console.log(titulliLendes);

var x= document.querySelector('.listTek:nth-child(2)');
x.innerHTML='Ky eshte ndryshimi';
x.style.color='blue';


//perdorimi i getElementbyTagName
var paragraf = document.getElementsByTagName('p');
for(let i=0;i < paragraf.length;i++) {
    paragraf[i].style.background = 'green'
}

/*getElementByClassName
var elClass = document.getElementsByClassName('lisTek');
for(let i=0;i < elClass.length,i++) {
    elClass[i].style.background = '#770011'
}*/

//perdorimi i metodes querySelectorALL
var rreshtNd = document.querySelectorALL('li:nth-child(odd)');
for(let i=0;i < rreshtNd.length;i++) {
    rreshtNd[i].style.background = '#663366'
}

//perdorimi i traversin
var parentNyja = documet.getElementById('titulliLenda').parentNode;
console.log(parentNyja);

//qasja neper atribut te elementeve  rasti i qasjes ne atribut src
var img01=document.getElementById('iconeUeb');

img01.setAttribute('src','imgS/foto3.png');

/**Krijimi i elementeve nga JavaScript */
function shtoElementin() {
    var divIM = document.createElement('div');
    divIM.innerHTML = "Une jam nje Boxi i krijuar me JavaScript ?";
    divIM.setAttribute('id', 'meJS');
    var shtimiDIVneKont =
    document.getElementById('kontenti').appendChild(divIM)
    shtimiDIVneKont.style.backgroundColor = '#889900';
    shtimiDIVneKont.style.border = '2px solid red';
    shtimiDIVneKont.style.height = '80px'
    console.log(shtimiDIVneKont);
    }
    document.body.onload = shtoElementin;