//SQUARE 
function squarePerimeter(side) {
    const perimeter = side * 4;
    return perimeter;
    
} 

function squareArea(side) {
   const area = side * side;
   return area;
}

//HTML SQUARE
function removeHiddenSquare() {
    const squareBody = document.getElementsByClassName("square-content");
    const circleContent = document.getElementsByClassName("circle-content");
    const triangleContent = document.getElementsByClassName("triangle-content");
    const discountsContent = document.getElementsByClassName("discounts-content");

    includeHidden(circleContent);
    includeHidden(triangleContent);
    includeHidden(discountsContent);
    return removeHidden(squareBody);
}

function calculateSquarePerimeter() {
    const side =  document.getElementById("InputSidesSquare").value;
    const elementSquarePerimeter = document.getElementsByClassName("square-perimeter");
    const result = document.getElementById("ResultSquarePerimeter");
    const perimeter = squarePerimeter(side);
    const measure = document.getElementById("SelectMeasuresSquare");
    const selected = measure.options[measure.selectedIndex].text;
    const error = document.getElementsByClassName("error-square");
    const errorId = document.getElementById("ErrorSquare");

    if(empty(side) !== true) {
        removeHidden(elementSquarePerimeter);
        includeHidden(error);
    return  result.innerHTML = "Perimeter: " + perimeter  + selected;
    } else {
        removeHidden(error);
        return errorId.innerHTML = "Error: input empty or invalid!";
    }
}
   
function calculateSquareArea() {
     const side =  document.getElementById("InputSidesSquare").value;
     const elementSquareArea = document.getElementsByClassName("square-area");
     const result = document.getElementById("ResultSquareArea");
     const measure = document.getElementById("SelectMeasuresSquare");
     const selected = measure.options[measure.selectedIndex].text;
     const area = squareArea(side);
     const error = document.getElementsByClassName("error-square");
     const errorId = document.getElementById("ErrorSquare");

     if(empty(side) !== true) {
        removeHidden(elementSquareArea);
        includeHidden(error);
        return result.innerHTML = `Area: ${area}${selected}<sup>2</sup>`;
     } else {
        removeHidden(error);
        return errorId.innerHTML = "Error: input empty or invalid!";
     }
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
    const discountsContent = document.getElementsByClassName("discounts-content");
    includeHidden(squareContent);
    includeHidden(triangleContent);
    includeHidden(discountsContent);
    return removeHidden(circleContent);
}

function calculateCircleDiameter() {
    const radius = document.getElementById("InputCircleRadius").value;
    const elementCircleDiamater = document.getElementsByClassName("circle-diameter");
    const result = document.getElementById("ResultCircleDiameter");
    const measure =  document.getElementById("SelectMeasuresCircle");
    const selected = measure.options[measure.selectedIndex].text;
    const diameter = circleDiameter(radius);
    const error = document.getElementsByClassName("error-circle");
    const errorId = document.getElementById("ErrorCircle");

     if(empty(radius) !== true) {
        removeHidden(elementCircleDiamater);
        includeHidden(error);
        return result.innerHTML = "Diameter: " + diameter + selected;
     } else {
        removeHidden(error);
        return errorId.innerHTML = "Error: input empty or invalid!";
     }
}

function calculateCirclePerimeter() {
    const radius = document.getElementById("InputCircleRadius").value;
    const elementCirclePerimeter = document.getElementsByClassName("circle-perimeter");
    const result = document.getElementById("ResultCirclePerimeter");
    const measure =  document.getElementById("SelectMeasuresCircle");
    const selected = measure.options[measure.selectedIndex].text;
    const perimeter = circlePerimeter(radius);
    const error = document.getElementsByClassName("error-circle");
    const errorId = document.getElementById("ErrorCircle");

    if(empty(radius) !== true) {
        removeHidden(elementCirclePerimeter);
        includeHidden(error);
        return result.innerHTML = "Perimeter: " + perimeter + selected;
     } else {
        removeHidden(error);
        return errorId.innerHTML = "Error: input empty or invalid!";
     }
}

function calculateCircleArea() {
    const radius = document.getElementById("InputCircleRadius").value;
    const elementCirclePerimeter = document.getElementsByClassName("circle-area");
    const result = document.getElementById("ResultCircleArea");
    const measure =  document.getElementById("SelectMeasuresCircle");
    const selected = measure.options[measure.selectedIndex].text;
    const area = circleArea(radius);
    const error = document.getElementsByClassName("error-circle");
    const errorId = document.getElementById("ErrorCircle");

    if(empty(radius) !== true) {
        removeHidden(elementCirclePerimeter);
        includeHidden(error);
        return result.innerHTML = "Area: " + area + selected + "<sup>2</sup>";
     } else {
        removeHidden(error);
        return errorId.innerHTML = "Error: input empty or invalid!";
     }

}

//TRIANGLE
function trianglePerimeter(side1, side2, base) {
    const perimeter = side1 + side2 + base;
    return perimeter;
  }

function triangleArea(base, height) {
    return (base * height) / 2;
} 
  


//HTML TRIANGLE
function removeHiddenTriangle() {
    const triangleContent = document.getElementsByClassName("triangle-content");
    const squareContent = document.getElementsByClassName("square-content");
    const circleContent = document.getElementsByClassName("circle-content");
    const discountsContent = document.getElementsByClassName("discounts-content");
    includeHidden(squareContent);
    includeHidden(circleContent);
    includeHidden(discountsContent);
    return removeHidden(triangleContent);
}


function calculateTrianglePerimeter() {
    const side1 = Number(document.getElementById("InputSideATriangle").value);
    const side2 = Number(document.getElementById("InputSideBTriangle").value);
    const base = Number(document.getElementById("InputBaseTriangle").value);
    const elementTrianglePerimeter = document.getElementsByClassName("triangle-perimeter");
    const measure =  document.getElementById("SelectMeasuresTriangle");
    const selected = measure.options[measure.selectedIndex].text;
    const result = document.getElementById("ResultTrianglePerimeter");
    const perimeter = trianglePerimeter(side1,side2,base);
    const error = document.getElementsByClassName("error-triangle");
    const errorId = document.getElementById("ErrorTriangle");

    
    if(empty(side1) === true) {
        removeHidden(error);
        return errorId.innerHTML = "Error: input  empty or invalid!";
    } 
    if(empty(side2) === true) {
        removeHidden(error);
        return errorId.innerHTML = "Error: input  empty or invalid!";
    }
    if(empty(base) === true) {
        removeHidden(error);
        return errorId.innerHTML = "Error: input  empty or invalid!";
    }
    else {
        removeHidden(elementTrianglePerimeter);
        includeHidden(error);
        return result.innerHTML = "Perimeter: " + perimeter + selected;
    }
}

function calculateTriangleArea() {
    const base = Number(document.getElementById("InputBaseTriangle").value);
    const height = Number(document.getElementById("InputHeightTriangle").value);
    const elementTriangleArea = document.getElementsByClassName("triangle-area");
    const result = document.getElementById("ResultTriangleArea");
    const measure =  document.getElementById("SelectMeasuresTriangle");
    const selected = measure.options[measure.selectedIndex].text;
    const area = triangleArea(base, height);
    const error = document.getElementsByClassName("error-triangle");
    const errorId = document.getElementById("ErrorTriangle");

    
   
    if(empty(base) === true) {
        removeHidden(error);
        return errorId.innerHTML = "Error: input  empty or invalid!";
    }
    if(empty(height) === true) {
        removeHidden(error);
        return errorId.innerHTML = "Error: input  empty or invalid!";
    }
    else {
        removeHidden(elementTriangleArea);
        includeHidden(error);
        return result.innerHTML = "Area: " + area + selected + "<sup>2</sup>";
    }

}







