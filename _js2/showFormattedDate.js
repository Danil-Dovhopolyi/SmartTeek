function showFormattedDate(date) {
  if (!typeof date === 'date') {
    return;
  }

  let months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  return `It's ${date.getDay()} of ${
    months[date.getMonth()]
  }, ${date.getFullYear()}`;
}
console.log(showFormattedDate(new Date('2018-08-27')));
