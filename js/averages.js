//VAR
let list = [];

//AVERAGES
function amountData () { //Amount of data that the user will introduce
    const inputAmountData = document.getElementById("InputAmountData");
    const value = parseInt(inputAmountData.value);
    return value;
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
        let addList = list.push(valueInput);
    }
}

function calculateArithmeticAverage () {
    //delete data of the array
    list = [];
    data();

    const sumList = list.reduce(
        function(accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );

    //receives the function sumList
    const listAverage = sumList / list.length;
    const result = document.getElementById("ResultAverage"); 
    const element = document.getElementsByClassName("result-average")
    removeHidden(element)
    result.innerText = "The Arithmetic Average is: " + listAverage.toFixed(3);
}
