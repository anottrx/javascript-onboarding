function problem1(pobi, crong) {
  var answer;
  if (!isValidatePage(pobi) || !isValidatePage(crong)) return -1;
  const pobiScore = getMyScore(addPage(pobi), multiplyPage(pobi));
  const crongScore = getMyScore(addPage(crong), multiplyPage(crong));
  return answer;
}

const addPage = (page) => {
  return (page[0].toString() + page[1].toString())
    .split("")
    .reduce((prev, cur) => prev + +cur, 0);
};

const multiplyPage = (page) => {
  return (page[0].toString() + page[1].toString())
    .split("")
    .reduce((prev, cur) => prev * +cur, 1);
};

const getMyScore = (addPageNumber, multiplyPageNumber) => {
  return addPageNumber > multiplyPageNumber
    ? addPageNumber
    : multiplyPageNumber;
};

const getWinner = (pobiScore, crongScore) => {
  if (pobiScore > crongScore) return 1;
  if (pobiScore === crongScore) return 0;
  return 2;
};

const isValidatePage = (page) => {
  if (page.length !== 2) return false;
  let leftPage = page[0],
    rightPage = page[1];
  if (leftPage - rightPage !== -1) return -1;
  if (leftPage < 1 || leftPage >= 400 || rightPage < 2 || rightPage > 400)
    return -1;
  if (leftPage % 2 !== 1 || rightPage % 2 !== 0) return -1;
};

module.exports = problem1;
