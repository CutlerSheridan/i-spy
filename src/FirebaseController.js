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

// Your web app's Firebase configuration
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

const getItems = async (gameId) => {
  const querySnapshot = await getDocs(collection(db, 'games', gameId, 'items'));
  const items = [];
  querySnapshot.forEach((doc) => items.push(doc.data()));
  return items;
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
  querySnapshot.forEach((x) => {
    const scoreObj = x.data();
    if (scoreObj.time !== currentScore) {
      rank++;
      currentScore = scoreObj.time;
    }
    leaderboard.push({ ...scoreObj, id: x.id, rank });
  });
  return leaderboard;
};

const items = [
  {
    // img width: 1225
    // img height: 812
    name: 'octopus',
    // xBounds: [246, 354],
    // yBounds: [134, 242],
    xBounds: { lowerPercent: 20, upperPercent: 29 },
    yBounds: { lowerPercent: 16, upperPercent: 30 },
    iconImgPath: '#',
  },
  // {
  //   name: 'sideways "n"',
  //   // xBounds: [1115, 1185],
  //   // yBounds: [396, 440],
  //   xBounds: { lowerPercent: 91, upperPercent: 97 },
  //   yBounds: { lowerPercent: 49, upperPercent: 54 },
  //   iconImgPath: '#',
  // },
  // {
  //   name: 'pink button',
  //   // xBounds: [127, 161],
  //   // yBounds: [697, 734],
  //   xBounds: { lowerPercent: 10, upperPercent: 13 },
  //   yBounds: { lowerPercent: 86, upperPercent: 90 },
  //   iconImgPath: '#',
  // },
];

export { getItems, submitUser, getLeaderboard };
