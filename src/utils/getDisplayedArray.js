export const getDisplayedArray = (pageArray, page) => {
  
  let displayedArray = [];
  let indexPage = pageArray.indexOf(page);
  let fillArrFrom = -4;
  let fillArrTo = 5;

  if (indexPage > 4) {
    displayedArray.push(pageArray[0]); // adds the first page if on a great number page

  } else {
    fillArrFrom = -(indexPage); // fill Arr from the beginning to the current page, if on the first pages
  }

  if ((pageArray.length - indexPage) <= 5) {
    fillArrTo = pageArray.length - indexPage; // fill Arr from the current page to the end, if on the last pages
  }

  for (let i = fillArrFrom; i != fillArrTo; i++) {
    displayedArray.push(pageArray[indexPage + i]); // fill the list
  }

  if ((pageArray.length - indexPage) > 5) {
    displayedArray.push(pageArray[pageArray.length - 1]); // adds the last page if on a firs pages
  }

  return displayedArray;
}