export const getDisplayedArray = (pageArray, page) => {
  let displayedArray = []
  let indexPage = pageArray.indexOf(page)
  let fillArrFrom = -4
  let fillArrTo = 5

  if (indexPage > 4) {
    displayedArray.push(pageArray[0])
  } else {
    fillArrFrom = -(indexPage)
  }

  if ((pageArray.length - indexPage) <= 5) {
    fillArrTo = pageArray.length - indexPage
  }

  for (let i = fillArrFrom; i != fillArrTo; i++) {
    displayedArray.push(pageArray[indexPage + i])
  }

  if ((pageArray.length - indexPage) > 5) {
    displayedArray.push(pageArray[pageArray.length - 1])
  }

  return displayedArray
}