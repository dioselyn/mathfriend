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