export function getSeason(monthNumber) {
  if (monthNumber < 1) monthNumber = 12 + monthNumber;
  let season = '';
  switch (monthNumber) {
    case '12':
    case '1':
    case '2':
      season = '⛄';
      break;
    case '3':
    case '4':
    case '5':
      season = '🌼';
      break;
    case '6':
    case '7':
    case '8':
      season = '🌞';
      break;
    case '9':
    case '10':
    case '11':
      season = '🍂';
      break;
  }
  return season;
}
