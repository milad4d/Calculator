let mainBody = document.querySelector("body");

let mainDiv = document.createElement("div");
mainBody.appendChild(mainDiv);
mainDiv.style.backgroundColor = "blue";
mainDiv.style.width = "800px";
mainDiv.style.display = "flex";
mainDiv.style.flexWrap = "Wrap";

let mainInput = document.createElement("input");
mainDiv.appendChild(mainInput);
mainInput.style.width = "800px";
mainInput.style.height = "100px";
mainInput.style.fontSize='20pt';

let mainMonitor=document.createElement('div');
mainDiv.appendChild(mainMonitor);
mainMonitor.style.width = "600px";
mainMonitor.style.height = "50px";
mainMonitor.style.backgroundColor='blue';
mainMonitor.style.color='white'
mainMonitor.style.fontSize='20pt';

let mainMonitorOutput=document.createElement('div');
mainDiv.appendChild(mainMonitorOutput);
mainMonitorOutput.style.width = "200px";
mainMonitorOutput.style.height = "50px";
mainMonitorOutput.style.backgroundColor='red';
mainMonitorOutput.style.color='white'
mainMonitorOutput.style.fontSize='30pt';
mainMonitorOutput.style.textAlign='center';



let buttons = [];
let buttonsNum = [7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, "*",0,'.','/','='];

for (let i = 0; i < 16; i++) {
  buttons[i] = document.createElement("button");
  mainDiv.appendChild(buttons[i]);
  buttons[i].textContent = buttonsNum[i];
  buttons[i].style.width = "200px";
  buttons[i].style.height = "100px";
  buttons[i].style.fontSize = "30px";
}
let lastEqual=0;
let doubleTapOperation=0;


for (let e = 0; e < 15; e++) {
  if (e == 3 || e == 7 || e == 11 || e == 14 || e == 15) {
    continue;
  } else {
    buttons[e].addEventListener("click", function () {
      if(lastEqual==0){
      mainInput.value += buttonsNum[e];
      mainMonitor.textContent+=buttonsNum[e];
      doubleTapOperation=0;
      }else{
        mainInput.value = buttonsNum[e];
        mainMonitor.textContent=buttonsNum[e];
        lastEqual=0;
        doubleTapOperation=0;
      }
    });
  }
};

// window.addEventListener("keyup", function (value) {
//   if (value.key == "7") {
//     mainInput.value += buttonsNum[0];
//   } else if (value.key == "8") {
//     mainInput.value += buttonsNum[1];
//   } else if (value.key == "9") {
//     mainInput.value += buttonsNum[2];
//   } else if (value.key == "4") {
//     mainInput.value += buttonsNum[4];
//   } else if (value.key == "5") {
//     mainInput.value += buttonsNum[5];
//   } else if (value.key == "6") {
//     mainInput.value += buttonsNum[6];
//   } else if (value.key == "1") {
//     mainInput.value += buttonsNum[8];
//   } else if (value.key == "2") {
//     mainInput.value += buttonsNum[9];
//   } else if (value.key == "3") {
//     mainInput.value += buttonsNum[10];
//   }
// });

let mem = 0;
let manyEqual;
let operationMean;
let firstCounter = 0;

buttons[3].addEventListener("click", function () {
  while(doubleTapOperation==0){
  if (firstCounter == 0) {
    mem = parseFloat(mainInput.value);
    firstCounter += 1;
  } else if (operationMean == 0) {
      mem -= parseFloat(mainInput.value);
    } else if(operationMean == 1) {
      mem += parseFloat(mainInput.value);
    } else if(operationMean == 2){
      mem *= parseFloat(mainInput.value);
    }else if(operationMean == 3){
      mem /= parseFloat(mainInput.value);
      
    };
  
  mainMonitorOutput.textContent=mem;
  mainMonitor.textContent+=' - ';
  mainInput.value = "";
  operationMean = 0;
  doubleTapOperation=1;
}

});

buttons[7].addEventListener("click", function () {
  while(doubleTapOperation==0){
  if (firstCounter == 0) {
    mem = parseFloat(mainInput.value);
    firstCounter += 1;
  } else if (operationMean == 0) {
      mem -= parseFloat(mainInput.value);
    } else if(operationMean == 1) {
      mem += parseFloat(mainInput.value);
    } else if(operationMean == 2){
      mem *= parseFloat(mainInput.value);
    }else if(operationMean == 3){
      mem /= parseFloat(mainInput.value);
    }
  
  mainMonitorOutput.textContent=mem;
  mainMonitor.textContent+=' + ';
  mainInput.value = "";
  operationMean = 1;
  doubleTapOperation=1;
}
});

buttons[11].addEventListener("click", function () {
  while(doubleTapOperation==0){
  if (firstCounter == 0) {
    mem = parseFloat(mainInput.value);
    firstCounter += 1;
  } else if (operationMean == 0) {
      mem -= parseFloat(mainInput.value);
    } else if(operationMean == 1) {
      mem += parseFloat(mainInput.value);
    } else if(operationMean == 2){
      mem *= parseFloat(mainInput.value);
    }else if(operationMean == 3){
      mem /= parseFloat(mainInput.value);
    }
  
  mainMonitorOutput.textContent=mem;
  mainMonitor.textContent+=' * ';
  mainInput.value = "";
  operationMean = 2;
  doubleTapOperation=1;
}
});

buttons[14].addEventListener("click", function () {
  while(doubleTapOperation==0){
  if (firstCounter == 0) {
    mem = parseFloat(mainInput.value);
    firstCounter += 1;
  } else if (operationMean == 0) {
      mem -= parseFloat(mainInput.value);
    } else if(operationMean == 1) {
      mem += parseFloat(mainInput.value);
    } else if(operationMean == 2){
      mem *= parseFloat(mainInput.value);
    }else if(operationMean == 3){
      mem /= parseFloat(mainInput.value);
    }
  
  mainMonitorOutput.textContent=mem;
  mainMonitor.textContent+=' / ';
  mainInput.value = "";
  operationMean = 3;
  doubleTapOperation=3;
}
});

buttons[15].addEventListener("click", function () {
  if (operationMean == 0) {
    mem -= parseFloat(mainInput.value);
    mainInput.value = mem;
    mainMonitorOutput.textContent=mem;
    manyEqual=mem;
    
  } else if (operationMean == 1) {
    mem += parseFloat(mainInput.value);
    mainInput.value = mem;
    mainMonitorOutput.textContent=mem;
    manyEqual=mem;

  }else if (operationMean == 2) {
    mem *= parseFloat(mainInput.value);
    mainInput.value = mem;
    mainMonitorOutput.textContent=mem;
    manyEqual=mem;

  }else if (operationMean == 3) {
    mem /= parseFloat(mainInput.value);
    mainInput.value = mem;
    mainMonitorOutput.textContent=mem;
    manyEqual=mem;

  }else if(operationMean==4){
    mainInput.value=manyEqual;
  }
  mem = 0;
  lastEqual=1;
  operationMean=4;
  firstCounter = 0;
});


