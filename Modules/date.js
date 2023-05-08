import { DateTime } from '../node_modules/luxon/src/luxon.js';

const date = () => {
  const datetime = document.getElementById('datetime');
  const now = DateTime.now();
  const nowFormart = now.toLocaleString(DateTime.DATETIME_FULL);
  datetime.innerHTML = `<small>${nowFormart}</small>`;
};
export default date;