//DISCOUNT
function calculatePriceWithDiscount(price, discount, coupon) {
    const totalPercent = discount + coupon;
    const percentPriceWithDiscount = 100 - totalPercent;
    const priceWithDiscount = (price * percentPriceWithDiscount) / 100;
    return priceWithDiscount;
}

//HTML DISCOUNTS
function removeHiddenDiscounts() {
    const discountsContent = document.getElementsByClassName("discounts-content");
    const circleContent = document.getElementsByClassName("circle-content");
    const triangleContent = document.getElementsByClassName("triangle-content");
    const squareContent = document.getElementsByClassName("square-content");
    const averageContent = document.getElementsByClassName("average-content");

    includeHidden(circleContent);
    includeHidden(triangleContent);
    includeHidden(squareContent);
    includeHidden(averageContent);
    return removeHidden(discountsContent);
}

function applyDiscount() {
    const price = document.getElementById("InputPrice").value;
    const discount = Number(document.getElementById("InputDiscount").value);
    const coupon = Number(document.getElementById("SelectDiscountCoupon").value);
    const percentDiscountTotal = discount + coupon;
    const total = calculatePriceWithDiscount(price, discount, coupon);
    const error = document.getElementsByClassName("error-discount");
    const errorId = document.getElementById("ErrorDiscount");
    const result = document.getElementById("ResultTotal");
    const elementDiscountTotal = document.getElementsByClassName("total-discount");


    if(empty(price) !== true) {
        removeHidden(elementDiscountTotal);
        includeHidden(error);
        return result.innerHTML = `Congratulations! Your Discount is ${percentDiscountTotal}% off, You will pay: $${total}`;
    } else {  
        removeHidden(error);
        return errorId.innerHTML = "Error: input empty or invalid!";
    }
     
}
