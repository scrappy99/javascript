"use strict";

/*
let szam = 125;
//hibakereső felület.
console.log(szam);
//DOM (document object model)segitségével
document.getElementById('pelda').innerText = szam;
//BOM(brouser object model) segitségével
// modális ablakban (modal window) jelenik meg.
window.alert(szam);
*/


/*window.confirm modális függvény,boolean értékel tér vissza 
let beenged = window.confirm('elmúltál már tizennyolc éves?');

if (!beenged) {
    document.getElementById('pelda').innerText ='nem mehetsz be,mert kicsi vagy';
}
else {
    document.getElementById('pelda').innerText ='elég nagy vagy, bemehetsz';
}
*/

/*window.confirm modális függvény,szövegértékel (string) tér vissza */
//let beenged = window.prompt('hány éves vagy', 18);

/*tipuskonverzio*/
//let kor = number(beenged);
//let kor = perseint(beenged);
//let kor = +beenged;
/*
if (kor <18) {
    document.getElementById('pelda').innerText ='nem mehetsz be,mert kicsi vagy';
}
else {
    document.getElementById('pelda').innerText ='elég nagy vagy, bemehetsz';
}*/


let beenged = window.prompt('a hét hanyadik napja van?', 1);

let nap = +beenged;

if (nap == 1) {
    document.getElementById('pelda').innerText ='a mai nap hétfö';
}

else if (nap == 2) {
    document.getElementById('pelda').innerText ='a mai nap kedd';
}

else if (nap == 3) {
    document.getElementById('pelda').innerText ='a mai nap szerda';
}

else if (nap == 4) {
    document.getElementById('pelda').innerText ='a mai nap csütörtök';
}

else if (nap == 5) {
    document.getElementById('pelda').innerText ='a mai nap péntek';
}
else if (nap == 6) {
    document.getElementById('pelda').innerText ='a mai nap szombat';
}

else if (nap== 7)
{
    document.getElementById('pelda').innerText ='a mai nap vasárnap';
}

