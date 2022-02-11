//GLOBAL
function removeHidden(element) {
    return element[0].classList.remove("visually-hidden");
  }
  
  function includeHidden(element) {
      return element[0].classList.add("visually-hidden");
  }
  
  function empty(element) {
      if(element === '' || element ==='0' || element === 0) {
          return true;
      }
  }

  function valuePercent(percent) {
    return percent / 100;
  }
  