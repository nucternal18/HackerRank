const btns = document.getElementById('btns');
const btn5 = document.getElementById('btns').childNodes;
const btnNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

function createBtns(num) {
  const btn = document.createElement('button');
  btn.className = 'buttonClass';
  btn.id = 'btn' + num;
  btn.innerHTML = num;
  btns.appendChild(btn);
}



function rotateBtns() {
    nums.unshift(nums.pop());
    for (i = 0; i <= 7; i++) {
      document.getElementById('btn' + ids[i]).innerHTML = nums[i];
    }
    
}

btnNums.forEach(num => {
    createBtns(num)
})

btn5[4].addEventListener('click', rotateBtns)

// btns.addEventListener('load', createBtns)
