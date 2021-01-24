const btn0 = document.getElementById('btn0')
const btn1 = document.getElementById('btn1')
const btnClr = document.getElementById('btnClr')
const btnEql = document.getElementById('btnEql')
const btnSum = document.getElementById('btnSum')
const btnSub = document.getElementById('btnSub')
const btnMul = document.getElementById('btnMul')
const btnDiv = document.getElementById('btnDiv')
const res = document.getElementById('res')

// add colour
btn0.style.backgroundColor = "lightgray"
btn0.style.color= "brown"
btn1.style.backgroundColor = "lightgray"
btn1.style.color= "brown"
btnClr.style.backgroundColor = "darkgreen"
btnClr.style.color= "white"
btnEql.style.backgroundColor = 'darkgreen';
btnEql.style.color = 'white';
btnSum.style.backgroundColor = "black"
btnSum.style.color= "red"
btnSub.style.backgroundColor = "black"
btnSub.style.color= "red"
btnMul.style.backgroundColor = "black"
btnMul.style.color= "red"
btnDiv.style.backgroundColor = "black"
btnDiv.style.color= "red"

/* Parameter 'e' is the click Event */
function action(e) {
 switch (e.target.id) {
   case 'btn0':
     res.textContent += '0';
     break;
   case 'btn1':
     res.textContent += '1';
     break;
   case 'btnClr':
     res.textContent = '';
     break;
   case 'btnEql':
     let c = res.textContent.split(/([\+\-\*\/])/);
     let r = eval(parseInt(c[0], 2) + c[1] + parseInt(c[2], 2));
     res.textContent = r.toString(2);
     break;
   case 'btnSum':
     res.textContent += '+';
     break;
   case 'btnSub':
     res.textContent += '-';
     break;
   case 'btnMul':
     res.textContent += '*';
     break;
   case 'btnDiv':
     res.textContent += '/';
     break;
 }
}

/* Add a click event listener that calls action(e) when clicked */
btn0.addEventListener('click', action, false);
btn1.addEventListener('click', action, false);
btnClr.addEventListener('click', action, false);
btnEql.addEventListener('click', action, false);
btnSum.addEventListener('click', action, false);
btnSub.addEventListener('click', action, false);
btnMul.addEventListener('click', action, false);
btnDiv.addEventListener('click', action, false);

