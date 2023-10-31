
import allSongsData from './songs-list.json';

let user = {
  firstName: 'Karlis',
  lastName: 'Barons',
  studentCode: 'IT-20174',
  loggedInAt: ["2023-10-31 10:00:00"],
  loggedIn: false,
};

function loginUser() {
  user.loggedIn = true;
  //nevareja pushot timestamp :(
  // const timestamp = new Date().toLocaleString('en-GB', {
  //   day: '2-digit',
  //   month: '2-digit',
  //   year: 'numeric',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });
  // user.loggedAt.push(timestamp);
}

function resetUser() {
  user = {
    firstName: 'Karlis',
    lastName: 'Barons',
    studentCode: 'IT-20174',
    loggedAt: [],
    loggedIn: false,
  };
}

const globalStore = {
  all_songs: allSongsData,
  user: user,
  loginUser: loginUser,
  resetUser: resetUser,
};


export default globalStore;
