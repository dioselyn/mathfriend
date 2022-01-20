//GLOBAL
function removeHidden(element) {
  return element[0].classList.remove("visually-hidden");
}

function includeHidden(element) {
    return element[0].classList.add("visually-hidden");
}


//SQUARE 
function squarePerimeter(side) {
    const perimeter = side * 4;
    return perimeter.toFixed(3);
    
} 

function squareArea(side) {
   const area = side * side;
   return area.toFixed(3);
}

//HTML SQUARE
function removeHiddenSquare() {
    const squareBody = document.getElementsByClassName("square-content");
    const circleContent = document.getElementsByClassName("circle-content");
    const triangleContent = document.getElementsByClassName("triangle-content");

    includeHidden(circleContent);
    includeHidden(triangleContent);
    return removeHidden(squareBody);
}

function calculateSquarePerimeter() {
    const side =  document.getElementById("InputSidesSquare").value;
    const elementSquarePerimeter = document.getElementsByClassName("square-perimeter");
    const result = document.getElementById("ResultSquarePerimeter");
    const perimeter = squarePerimeter(side);
    const measure = document.getElementById("SelectMeasures");
    const selected = measure.options[measure.selectedIndex].text;
    
    removeHidden(elementSquarePerimeter);
    return  result.innerHTML = "Perimeter: " + perimeter + " " + selected;
}
   
function calculateSquareArea() {
     const side =  document.getElementById("InputSidesSquare").value;
     const elementSquareArea = document.getElementsByClassName("square-area");
     const result = document.getElementById("ResultSquareArea");
     const measure = document.getElementById("SelectMeasures");
     const selected = measure.options[measure.selectedIndex].text;
     const area = squareArea(side);
     
     

     removeHidden(elementSquareArea);
     return result.innerHTML = `Area: ${area} ${selected}<sup>2</sup>`;
}


//CIRCLE
const PI = Math.PI ; //PI

function circleDiameter(radius) { 
    return radius * 2; 
   }

function circlePerimeter(radius) {
    const diameter = circleDiameter(radius);
    const perimeter = diameter * PI; 
    return perimeter.toFixed(3);
}

function circleArea(radius) {
    const area =  (radius * radius) * PI; 
    return area.toFixed(3);
  }

   
//HTML CIRCLE
function removeHiddenCircle() {
    const circleContent = document.getElementsByClassName("circle-content");
    const squareContent = document.getElementsByClassName("square-content");
    const triangleContent = document.getElementsByClassName("triangle-content");
    includeHidden(squareContent);
    includeHidden(triangleContent);
    return removeHidden(circleContent);
}

function calculateCircleDiameter() {
    const radius = document.getElementById("InputCircleRadius").value;
    const elementCircleDiamater = document.getElementsByClassName("circle-diameter");
    const result = document.getElementById("ResultCircleDiameter");
    const measure =  document.getElementById("SelectMeasuresCircle");
    const selected = measure.options[measure.selectedIndex].text;
    const diameter = circleDiameter(radius);

    removeHidden(elementCircleDiamater);
    return result.innerHTML = "Diameter: " + diameter + " " + selected;
}

function calculateCirclePerimeter() {
    const radius = document.getElementById("InputCircleRadius").value;
    const elementCirclePerimeter = document.getElementsByClassName("circle-perimeter");
    const result = document.getElementById("ResultCirclePerimeter");
    const measure =  document.getElementById("SelectMeasuresCircle");
    const selected = measure.options[measure.selectedIndex].text;
    const perimeter = circlePerimeter(radius);

    removeHidden(elementCirclePerimeter);
    return result.innerHTML = "Perimeter: " + perimeter + " " + selected;
}

function calculateCircleArea() {
    const radius = document.getElementById("InputCircleRadius").value;
    const elementCirclePerimeter = document.getElementsByClassName("circle-area");
    const result = document.getElementById("ResultCircleArea");
    const measure =  document.getElementById("SelectMeasuresCircle");
    const selected = measure.options[measure.selectedIndex].text;
    const area = circleArea(radius);

    removeHidden(elementCirclePerimeter);
    return result.innerHTML = "Area: " + area + " " + selected + "<sup>2</sup>";
}

//TRIANGLE
function trianglePerimeter(side1, side2, base) {
    const perimeter = side1 + side2 + base;
    return perimeter.toFixed(3);
  }
  


//HTML TRIANGLE
function removeHiddenTriangle() {
    const triangleContent = document.getElementsByClassName("triangle-content");
    const squareContent = document.getElementsByClassName("square-content");
    const circleContent = document.getElementsByClassName("circle-content");
    includeHidden(squareContent);
    includeHidden(circleContent);
    return removeHidden(triangleContent);
}


function calculateTrianglePerimeter() {
    const side1 = document.getElementById("InputSideATriangle").value;
    const side2 = document.getElementById("InputSideBTriangle").value;
    const base = document.getElementById("InputBaseTriangle").value;
    const elementTrianglePerimeter = document.getElementsByClassName("triangle-perimeter");
    const perimeter = trianglePerimeter(side1,side2,base);

    removeHidden(elementTrianglePerimeter);
}




