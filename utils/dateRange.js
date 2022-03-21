export function newItemAlert(apiDate) {
  let today = new Date();
  let publishedDate = new Date(apiDate);

  let timeDifference = today.getTime() - publishedDate.getTime();
  let daysGoneBye = timeDifference / (1000 * 3600 * 24);

  return daysGoneBye;
}
