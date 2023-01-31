const usernum = document.querySelector("#guess_number");
const usersub = document.querySelector("#guess_submit");
const list = document.querySelector("#lists");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");
const hint = document.querySelector("#hint");
const render = document.querySelectorAll("#render p")

let count = 1;
let resetbutton;
let randomNum = Math.floor(Math.random()*100)+1;


function GuessGame(event){
    event.preventDefault();
    const num = Number(usernum.value);
    if(count === 1){    // 문구 생성
        list.innerText = "내 입력: "
    }

    list.innerText += " " + num;
    
    if(num === randomNum){
        result.innerText = "!!!승리!!!";
        result.style.backgroundColor = "green";
        end();
    }else if (count === 10){
        result.innerText = "!!!패배!!!";
        result.style.backgroundColor = "red";
        end();
    }else{
        result.innerText = `틀렸습니다! 남은기회는 단 ${10-count}번!`;
        result.style.color = "white";
        result.style.backgroundColor = "red";
        if(num < randomNum){
            hint.innerText = "Hint : <<업>>";
        }else{
            hint.innerText = "Hint : <<다운>>";
        }
    }

    console.log(randomNum);
    console.log(num);
    count++;
    usernum.value = "";
    usernum.focus();
}

usersub.addEventListener('click', GuessGame);

function end(){
    usernum.disabled = true;
    usersub.disabled = true;
    hint.innerText = "";
    resetbutton = document.createElement("button");
    resetbutton.innerText = "한번 더!";
    document.body.append(resetbutton);
    resetbutton.addEventListener('click', resetAll);
}

function resetAll(){
    count = 1;
    for (const each of render){
        each.innerText = "";
    }
    usernum.disabled = false;
    usersub.disabled = false;
    resetbutton.parentNode.removeChild(resetbutton);
    randomNum = Math.floor(Math.random()*100)+1;
}
