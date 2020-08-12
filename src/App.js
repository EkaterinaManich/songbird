import React, { Component } from "react";
import _ from "lodash";

import "./App.scss";
import data from "./data/data";
import Header from "./Components/Header/Header";
import Question from "./Components/Question/Question";
import Answers from "./Components/Answers/Answers";
import Description from "./Components/Description/Description";
import GameOver from "./Components/GameOver/GameOver";
import winAudio from './assets/audio/win-notification.wav';

export default class App extends Component {
  constructor() {
    super();

    this.winNotification = new Audio(winAudio);

    this.state = {
      isNextLevelButtonDisabled: true,
      score: 0,
      maxResultPointsForQuestion: 5,
      question: {
        id: data[0].id,
        species: data[0].species,
        description: data[0].description,
        image: data[0].image,
        name: data[0].name,
        audio: data[0].audio,
      },
      currentArrayWithBirds: 0,
      birdsData: data[0],
      isAnswerCanPicked: true,
      isGameOver: false,
      description: {
        placeholerText: "Послушайте плеер. Выберите птицу из списка",
        isBirdPicked: false,
        bird: null,
      },
      isQuestionAudioPlay: null,
    };
  }

  componentDidMount() {
    // add .answerColorState to all objects
    for(let i = 0; i < data.length; i++) {
      data[i] = this.addAnswerColorState(data[i]);
    }

    let randNumber = this.takeRandomNumber(0, this.state.birdsData.length - 1);
    
    this.setState({
      ...this.state,
      birdsData: data[0],
      question: data[0][randNumber],
    });
  }

  addAnswerColorState = (arr) => {
    return arr.map(item => {
      return {
        ...item,
        answerColorState: "secondary",
      };
    });
  };

  changeAnswerColorState = (obj) => {
    this.setState({
      ...this.state,
      birdsData: this.state.birdsData.map((item) => {
        if (obj.id === item.id) {
          if (this.state.question.id === obj.id) {
            return {
              ...item,
              answerColorState: "success",
            };
          }

          return {
            ...item,
            answerColorState: "danger",
          };
        }
        return item;
      }),
    });
  };

  setGameOver = () => {
    this.setState({
      ...this.state,
      isGameOver: true,
    })
  }

  changeBirdsData = () => {
    if (data.length < this.state.currentArrayWithBirds + 2) {
      this.winNotification.play();
      return this.setGameOver();
    }
    
    let randNumber = this.takeRandomNumber(0, this.state.birdsData.length - 1);

    this.setState({
      ...this.state,
      question: data[this.state.currentArrayWithBirds + 1][randNumber],
      description: {
        placeholerText: "Послушайте плеер. Выберите птицу из списка",
        isBirdPicked: false,
        bird: null,
      },
      currentArrayWithBirds: this.state.currentArrayWithBirds + 1,
      birdsData: data[this.state.currentArrayWithBirds + 1],
      isNextLevelButtonDisabled: true,
      isAnswerCanPicked: true,
    });
  };

  takeRandomNumber = (minNumber, maxNumber) => {
    return _.random(minNumber, maxNumber);
  };

  pickBird = (obj) => {
    this.setState({
      ...this.state,
      description: {
        isBirdPicked: true,
        bird: obj,
      },
    });
  };

  defineIsAnswerPickedCorrect = () => {
    for (let obj of this.state.birdsData) {
      if (obj.answerColorState === 'success') {
        return true;
      }
    }
    return false;
  }

  defineScorePoints = () => {
    let resultPoints = this.state.maxResultPointsForQuestion;
    for (let obj of this.state.birdsData) {
      if(obj.answerColorState === 'danger') {
        resultPoints -= 1;
      }
    }
    return resultPoints;
  }

  endLevelWithScore = (scorePoints) => {
    this.setState({
      ...this.state,
      isAnswerCanPicked: false,
      isNextLevelButtonDisabled: false,
      score: this.state.score + scorePoints,
    })
  }

  startGameFromBeginning = () => {

    let randNumber = this.takeRandomNumber(0, this.state.birdsData.length - 1);

    this.setState({
      isNextLevelButtonDisabled: true,
      score: 0,
      question: data[0][randNumber],
      currentArrayWithBirds: 0,
      birdsData: data[0],
      isAnswerCanPicked: true,
      isGameOver: false,
      description: {
        placeholerText: "Послушайте плеер. Выберите птицу из списка",
        isBirdPicked: false,
        bird: null,
      },
      isQuestionAudioPlay: null,
    })
  }

  defineMaxScore = () => {
    return data.length * this.state.maxResultPointsForQuestion;
  }

  playQuestionAudioPlayer = () => {
    this.setState({
      ...this.state,
      isQuestionAudioPlay: true,
    })
  }

  pauseQuestionAudioPlayer = () => {
    this.setState({
      ...this.state,
      isQuestionAudioPlay: false,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <Header
            data={data}
            score={this.state.score}
            currentArrayWithBirds={this.state.currentArrayWithBirds}
          />
          {this.state.isGameOver ?
            <GameOver score={this.state.score} startGameFromBeginning={this.startGameFromBeginning} maxScore={this.defineMaxScore()} /> : (
            <>
              <Question
                questionData={this.state.question}
                isAnswerCanPicked={this.state.isAnswerCanPicked}
                isQuestionAudioPlay={this.state.isQuestionAudioPlay}
                playQuestionAudioPlayer={this.playQuestionAudioPlayer}
                pauseQuestionAudioPlayer={this.pauseQuestionAudioPlayer}
              />
              <div className="app-answers-description">
                <Answers
                  endLevelWithScore={this.endLevelWithScore}
                  isNextLevelButtonDisabled={this.state.isNextLevelButtonDisabled}
                  defineScorePoints={this.defineScorePoints}
                  defineIsAnswerPickedCorrect={this.defineIsAnswerPickedCorrect}
                  birdsData={this.state.birdsData}
                  isAnswerCanPicked={this.state.isAnswerCanPicked}
                  pickBird={this.pickBird}
                  changeAnswerColorState={this.changeAnswerColorState}
                  isQuestionAudioPlay={this.state.isQuestionAudioPlay}
                  pauseQuestionAudioPlayer={this.pauseQuestionAudioPlayer}
                />
                <Description description={this.state.description} />
              </div>
              <button
                type="button"
                onClick={this.changeBirdsData}
                className={`next-level btn btn-${this.state.isNextLevelButtonDisabled ? 'secondary' : 'primary'}`}
                disabled={this.state.isNextLevelButtonDisabled}
              >
                  Change Birds data
              </button>
            </>
            )
          }
        </div>
      </div>
    );
  }
}
