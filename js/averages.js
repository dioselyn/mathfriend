//VAR
let list = [];

//AVERAGES
function amountData () { //Amount of data that the user will introduce
    const inputAmountData = document.getElementById("InputAmountData");
    const value = parseInt(inputAmountData.value);
    return value;
}

function isPair(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function arithmeticAverage(list) {

    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement ) {
            return accumulatedValue + newElement;
        }
    )

    const averageList = sumList / list.length;
    return averageList;
}

function count(arrayElements, valueToCount) {
    return arrayElements.filter((element) => element === valueToCount).length;
  }

function mode(values) {
    const [repetitions, mode] = values.reduce(
      (acc, val) => {
        const arrayNumberOfTimes = count(values, val);
        if (arrayNumberOfTimes === acc[0] && acc[1].every((item) => item !== val)) {
          acc[1].push(val);
        } else if (arrayNumberOfTimes > acc[0]) {
          acc = [arrayNumberOfTimes, [val]];
        }
        return acc;
      },
      [0, []]
    );
     return {repetitions, mode} ;
  }


//HTML AVERAGES
function removeHiddenAverage() {
    const averageContent = document.getElementsByClassName("average-content");
    const discountsContent = document.getElementsByClassName("discounts-content");
    const circleContent = document.getElementsByClassName("circle-content");
    const triangleContent = document.getElementsByClassName("triangle-content");
    const squareContent = document.getElementsByClassName("square-content");

    includeHidden(circleContent);
    includeHidden(triangleContent);
    includeHidden(squareContent);
    includeHidden(discountsContent);
    return removeHidden(averageContent);
}

function addInput () {
    var element = document.getElementById("addInputs");
    const footer = document.getElementsByClassName("footer-average");
    //Delete all child elements of the parent
    while (element.firstChild) {
      element.removeChild(element.firstChild);
     };
    //put the inputs
    const valueAmountData = amountData();

    for(let i = 1; i < (valueAmountData + 1); i++ ) {
        var inputs = '<div class="form-floating mb-3"> <input type="number" class="form-control" id="'+ i +'"> <label for="' + i + '">Data '+ i +'</label></div>'
        element.insertAdjacentHTML('beforeend', inputs);
    }

    return removeHidden(footer);
}

function data () {
    const valueAmountData = amountData();

    for (let i = 1; i < (valueAmountData + 1); i++){
        let id = i;
        let valueInput =  Number(document.getElementById(id).value);
        list.push(valueInput);
    }
}

function calculateArithmeticAverage () {
    //delete data of the array
    list = [];
    data();


    //receives the function sumList
    const listAverage = arithmeticAverage(list);
    const result = document.getElementById("ResultAverage"); 
    const element = document.getElementsByClassName("result-average");
    removeHidden(element);
    result.innerText = "The Arithmetic Average is: " + listAverage.toFixed(2);
}


function calculateMedian() {

    list = [];
    data();
    
    const middleList1 = parseInt(list.length / 2);

    let median;
    
    if (isPair(list.length)) {
    
        const element1 = list[middleList1 - 1];
        const element2 = list[middleList1];
    
        const averageElement1and2 = arithmeticAverage([
            element1,
            element2,
        ]);
    
       median = averageElement1and2;
       const result = document.getElementById("ResultMedian"); 
       const element = document.getElementsByClassName("result-median");
       removeHidden(element)
       result.innerText = "The median is: " + median;
    
    } else {
       median = list[middleList1];
       const result = document.getElementById("ResultMedian"); 
       const element = document.getElementsByClassName("result-median");
       removeHidden(element)
       result.innerText = "The median is: " + median;
    }  
}




  function calculateMode() {
      
      list = [];
      data();

      const value =  mode(list);
      const result = document.getElementById("ResultMode"); 
      const element = document.getElementsByClassName("result-mode");
      removeHidden(element);

      result.innerText ="The mode is: "+ value.mode +" repeats: " + value.repetitions + " times" ;
     
  }
  

  
 