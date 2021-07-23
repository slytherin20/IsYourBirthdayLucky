const popUp = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".btn");
const dateInput = document.querySelector(".date");
const luckyInput = document.querySelector(".lucky-no");
const resultContainer = document.querySelector(".show-result");

closeBtn.addEventListener("click",closePopUp);
submitBtn.addEventListener("click",computeOutput);


function closePopUp(){
    popUp.classList.add("hidden");
}

function computeOutput(){
    removePreviousResult()
    let date = dateInput.value;
    let luckyNo = luckyInput.value;
    if(!dateInput.value && !luckyInput.value){
       showWarning("Please enter both birthday and lucky number");
    }
    else if(!dateInput.value){
        showWarning("Please enter your birthday");
    }
    else if(!luckyInput.value){
        showWarning("Please enter your lucky number");
    }
    else if(luckyNo!=(luckyNo|0)){
        showWarning("Please enter lucky number as a whole number.")
    }
    else{
        date = date.split("-").join("")
        let sum = 0;
        while(date!=0){
            sum += date%10;
            date = date/10 | 0;
        }
        sum%luckyNo===0?luckyBirthday():notLuckBirthday()
    }
}

function luckyBirthday(){
    let text = document.createElement("h3");
    text.setAttribute("class","success");
    text.innerText = "Yuss!! You have a lucky birthday!!!";
    let gif = document.createElement("img");
    gif.setAttribute("src","images/success.gif");
    gif.setAttribute("alt","lucky");
    gif.setAttribute("class","party");
    resultContainer.appendChild(text);
    resultContainer.appendChild(gif);
}
function notLuckBirthday(){
    let text = document.createElement("h3");
    text.setAttribute("class","fail");
    text.innerText = "Sorry!You do not have a lucky birthday";
    let gif = document.createElement("img");
    gif.setAttribute("src","images/failure.gif");
    gif.setAttribute("alt","unlucky");
    gif.setAttribute("class","crying");
    resultContainer.appendChild(text);
    resultContainer.appendChild(gif);
}

function removePreviousResult(){
    while(resultContainer.firstChild){
        resultContainer.removeChild(resultContainer.firstChild)
    }
}

function showWarning(message){
    let warning = document.createElement("p");
    warning.setAttribute("class","warning");
    warning.innerText = message;
    resultContainer.appendChild(warning);
}