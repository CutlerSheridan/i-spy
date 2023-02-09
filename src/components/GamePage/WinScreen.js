import './WinScreen.css';
import { useState } from 'react';

// DATABASE FUNCS START
const uploadName = async (name, time) => {
  // upload name and time to this game's leaderboards
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`uploaded name ${name} and time ${time}`);
      resolve();
    }, 1000)
  );
};
const getLeaderboards = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`collected leaderboards`);
      resolve();
    }, 1000)
  );
};
const getRank = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('got rank');
      resolve(15);
    })
  );
};
// DATABASE FUNCS END

const WinScreen = (props) => {
  const { playerTime } = props;
  const [name, setName] = useState('');
  const [nameIsSubmitted, setNameIsSubmitted] = useState(-1);
  const [leaderboardRank, setLeaderboardRank] = useState(-1);

  const populateWinScreen = () => {
    switch (nameIsSubmitted) {
      case -1:
        return createNameInput();
      case 0:
        return createLoadingScreen();
      case 1:
        return createLeaderboards();
    }
  };
  const createNameInput = () => {
    return (
      <form className="name-container">
        <h2>You won!</h2>
        <h3>Time: {playerTime}</h3>
        <label className="name-label" htmlFor="name-input">
          Enter a username:
        </label>
        <input
          className="name-input"
          id="name-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
    uploadName(name, playerTime)
      .then(getLeaderboards)
      .then(getRank)
      .then((result) => {
        setLeaderboardRank(result);
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
  const createLeaderboards = () => {
    return (
      <div className="leaderboards-outerContainer">
        <h2 className="leaderboards-heading">
          Congrats {name}, you ranked {leaderboardRank}th!{' '}
        </h2>
      </div>
    );
  };

  return (
    <div className="win-outerContainer">
      <div className="win-innerContainer">{populateWinScreen()}</div>
    </div>
  );
};

export default WinScreen;
