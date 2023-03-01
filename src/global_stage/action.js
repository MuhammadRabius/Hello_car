import { TOKEN } from "./actionTypes";

// checking is token or not
export const IsToken = () => {
  if (TOKEN) {
    return true;
  }

  return false;
};

// logout
export const Logout = () => {
  if (TOKEN) {
    sessionStorage.removeItem("token");
    window.location.replace("/");
    return;
  }

  return;
};


// get local date according to GMT timezone
export const calcDate = (date, offset) => {

    // create Date object for current location
    const d = new Date(date);

    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset));

    // return time as a string
    return nd.toDateString();

}
// get local time depends on country
export const getLocalDate = (time) => {
  const getTimeZone = time?.slice(
    time.indexOf("+") + 1,
    time?.indexOf("+") + 3
  );
  const timeStr = calcDate(time, getTimeZone);

  return timeStr;
};
