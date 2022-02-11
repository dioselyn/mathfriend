function simpleInterest(money, percent, years) {
  const value = valuePercent(percent);
  const annualInterest = money * value;
  return (annualInterest * years).toFixed(2);
}

function compountInterest(money, percent, years) {
  const value = valuePercent(percent);
  const formula = 1 + value;
  return (money * Math.pow(formula,years)).toFixed(2);
}

//HTML INTEREST
function removeHiddenInterest() {
    const averageContent = document.getElementsByClassName("average-content");
    const discountsContent = document.getElementsByClassName("discounts-content");
    const circleContent = document.getElementsByClassName("circle-content");
    const triangleContent = document.getElementsByClassName("triangle-content");
    const squareContent = document.getElementsByClassName("square-content");
    const interestContent = document.getElementsByClassName("interest-content");

    includeHidden(circleContent);
    includeHidden(triangleContent);
    includeHidden(squareContent);
    includeHidden(discountsContent);
    includeHidden(averageContent);
    return removeHidden(interestContent);
}

function calculateInterest() {
    const money = document.getElementById("InputMoney").value;
    const percent = document.getElementById("InputPercent").value;
    const years = document.getElementById("InputYears").value;
    const resultSimpleInterest = simpleInterest(money, percent, years);
    const resultCompountInterest = compountInterest(money, percent, years);
    const error = document.getElementsByClassName("error-interest");
    const errorId = document.getElementById("ErrorInterest");
    const result = document.getElementById("ResultSimpleInterest");
    const elementSimpleInterest = document.getElementsByClassName("simple-interest");
    const result2 = document.getElementById("ResultCompountInterest")
    const elementCompountInterest = document.getElementsByClassName("compount-interest");


    if(empty(money) !== true && empty(percent) !== true && empty(years) !== true) {
        removeHidden(elementSimpleInterest);
        removeHidden(elementCompountInterest);
        includeHidden(error);
        result.innerHTML = `The Simple Interest is $${resultSimpleInterest} on your initial investment`;
        result2.innerHTML = `The Compount Interest is $${resultCompountInterest} on your initial investment`;
    } else {  
        removeHidden(error);
        return errorId.innerHTML = "Error: input empty or invalid!";
    }
     
}