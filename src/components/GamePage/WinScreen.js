import './WinScreen.css';
import { useState } from 'react';
import { submitUser, getLeaderboard } from '../../FirebaseController';

// DATABASE FUNCS START
// const submitUser = async (name, time) => {
//   // upload name and time to this game's leaderboard
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(`uploaded name ${name} and time ${time}`);
//       resolve();
//     }, 1000)
//   );
// };
// const getLeaderboard = async (docRef) => {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(`collected leaderboard`);
//       resolve(docRef);
//     }, 1000)
//   );
// };
// DATABASE FUNCS END

const WinScreen = (props) => {
  const { gameId, playerTime } = props;
  const [name, setName] = useState('');
  const [nameIsSubmitted, setNameIsSubmitted] = useState(-1);
  const [rank, setRank] = useState(-1);
  const [leaderboard, setLeaderboard] = useState([]);
  const [userId, setUserId] = useState('');

  const populateWinScreen = () => {
    switch (nameIsSubmitted) {
      case -1:
        return createNameInput();
      case 0:
        return createLoadingScreen();
      case 1:
        return createLeaderboard();
    }
  };
  const createNameInput = () => {
    return (
      <form className="name-container">
        <h2>You won!</h2>
        <h3>Time: {playerTime}</h3>
        <div className="name-inputGroup">
          <label className="name-label" htmlFor="name-input">
            Enter a name:
          </label>
          <input
            className="name-input"
            id="name-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="name-submit"
          onClick={handleNameSubmission}
        >
          Submit
        </button>
      </form>
    );
  };
  const handleNameSubmission = (e) => {
    e.preventDefault();
    setNameIsSubmitted(0);
    console.log('start of handle submission');
    let userRef;
    submitUser(gameId, name, playerTime)
      .then((result) => {
        userRef = result;
        setUserId(userRef);
        return getLeaderboard(gameId);
      })
      .then((result) => {
        setRank(result.find((x) => x.id === userRef).rank);
        setLeaderboard(result);
        setNameIsSubmitted(1);
        console.log('end of handle name submission');
      });
  };
  const createLoadingScreen = () => {
    return (
      <div className="loading-container">
        <h2 className="loading">Loading</h2>
      </div>
    );
  };
  const createLeaderboard = () => {
    return (
      <div className="leaderboard-outerContainer">
        <h2 className="leaderboard-heading">You ranked {rank}th! </h2>
        <div className="leaderboard-innerContainer">
          {leaderboard.map((x) => (
            <div
              className={`leaderboard-entryGroup ${
                x.id === userId ? 'leaderboard-currentPlayer' : ''
              }`}
              key={x.id}
            >
              <div className="leaderboard-rank">{x.rank}.</div>
              <div className="leaderboard-name">{x.name}</div>
              <div className="leaderboard-time">{x.time}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="win-outerContainer">
      <div
        className={`win-innerContainer ${
          nameIsSubmitted === 1 ? 'win-innerContainer-showingLeaderboard' : ''
        }`}
      >
        {populateWinScreen()}
      </div>
    </div>
  );
};

export default WinScreen;
