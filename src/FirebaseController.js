import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  getDocs,
  addDoc,
  doc,
  collection,
  query,
  orderBy,
} from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHjS8hQa23D7aNQxm6kIzkAtVkCZcqMfc',
  authDomain: 'i-spy-9681f.firebaseapp.com',
  projectId: 'i-spy-9681f',
  storageBucket: 'i-spy-9681f.appspot.com',
  messagingSenderId: '894925528785',
  appId: '1:894925528785:web:90c677d5f3b9093efe2ff0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const imagesRef = ref(storage, 'images');

const getItems = async (gameId) => {
  const querySnapshot = await getDocs(collection(db, 'games', gameId, 'items'));
  const items = [];
  querySnapshot.forEach((doc) => items.push(doc.data()));
  return items;
};
const getImage = async (gameId) => {
  const imageUrl = await getDownloadURL(ref(imagesRef, `${gameId}.jpg`));
  return imageUrl;
};
const submitUser = async (gameId, name, time) => {
  const docRef = await addDoc(collection(db, 'games', gameId, 'leaderboard'), {
    name,
    time,
  });
  return docRef.id;
};
const getLeaderboard = async (gameId) => {
  const querySnapshot = await getDocs(
    query(collection(db, 'games', gameId, 'leaderboard'), orderBy('time'))
  );
  const leaderboard = [];
  let rank = 0;
  let currentScore;
  querySnapshot.forEach((x, index) => {
    const scoreObj = x.data();
    if (scoreObj.time !== currentScore) {
      rank = index + 1;
      currentScore = scoreObj.time;
    }
    leaderboard.push({ ...scoreObj, id: x.id, rank });
  });
  leaderboard.sort((x, y) => {
    const xTimeColonIndex = x.time.indexOf(':');
    const yTimeColonIndex = y.time.indexOf(':');
    const xMinutesNumer = +x.time.slice(0, xTimeColonIndex);
    const yMinutesNumber = +y.time.slice(0, yTimeColonIndex);
    return xMinutesNumer - yMinutesNumber;
  });
  return leaderboard;
};

// MOCKS FOR TESTING START
// const getItems = (gameId) => {
//   if (gameId === 'game1') {
//     return items1;
//   }
//   return items2;
// };
// const submitUser = async (gameId, name, time) => {
//   // upload name and time to this game's leaderboard
//   return Promise.resolve('fjoewa42402940');
// };
// const getLeaderboard = async (gameId) => {
//   return Promise.resolve([
//     {
//       name: 'cutler',
//       time: '0:05',
//       id: 'fjoewa42402940',
//       rank: 1,
//     },
//     {
//       name: 'tyler',
//       time: '0:10',
//       id: 'o2424jfw090gJ',
//       rank: 2,
//     },
//   ]);
// };
// const getImage = (gameId) => {
//   return `./images/${gameId}.jpg`;
// };
// MOCKS FOR TESTING END

const createItemsArray = (width, height, paramsArraysArray) => {
  const itemsArray = [];
  paramsArraysArray.forEach((arg) => {
    itemsArray.push(
      Item(width, height, [arg[0], arg[1]], [arg[2], arg[3]], arg[4])
    );
  });
  return itemsArray;
};
const Item = (width, height, xBoundsArray, yBoundsArray, name) => {
  const newItem = { name, xBounds: {}, yBounds: {} };
  newItem.xBounds.lowerPercent = toPercent(xBoundsArray[0], width);
  newItem.xBounds.upperPercent = toPercent(xBoundsArray[1], width);
  newItem.yBounds.lowerPercent = toPercent(yBoundsArray[0], height);
  newItem.yBounds.upperPercent = toPercent(yBoundsArray[1], height);
  return newItem;
};
const toPercent = (itemLength, imgLength) => {
  return Math.round((itemLength * 100) / imgLength);
};
// img width: 1225
// img height 812
const items1 = createItemsArray(1225, 812, [
  [246, 354, 134, 242, 'octopus'],
  [1115, 1185, 396, 440, 'sideways "n"'],
  [127, 161, 697, 734, 'pink button'],
]);
items1.push(
  ...createItemsArray(1429, 946, [
    [478, 558, 339, 433, 'white "m"'],
    [421, 465, 445, 498, 'shamrock pendant'],
    [1250, 1369, 720, 839, 'surprised bear'],
    [995, 1198, 31, 130, 'stegosaurus'],
    [1027, 1123, 528, 593, 'rubber band'],
    [1236, 1284, 853, 894, '"G 51" token'],
    [177, 226, 118, 167, 'nickel'],
  ])
);
const items2 = createItemsArray(1429, 843, [
  [899, 947, 89, 169, 'watch'],
  [1307, 1359, 307, 373, 'white knight'],
  [462, 555, 656, 682, 'magnet'],
  [601, 629, 466, 545, 'whistle'],
  [91, 162, 337, 513, 'ruler'],
  [1327, 1370, 395, 470, 'whale'],
  [186, 252, 592, 729, 'dew drops'],
  [494, 546, 26, 61, '"BOO HOO"'],
  [133, 224, 130, 160, 'spool on a nail'],
  [121, 202, 720, 769, 'metal shoe'],
]);

export { getItems, submitUser, getLeaderboard, getImage };
