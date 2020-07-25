import React, { Component } from "react";
import _ from "lodash";

import "./App.scss";
import data from "./data/data";
import Header from "./Components/Header/Header";
import Question from "./Components/Question/Question";
import Answers from "./Components/Answers/Answers";
import Description from "./Components/Description/Description";

export default class App extends Component {
  state = {
    score: 0,
    points: 5,
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
    description: {
      placeholerText: "Послушайте плеер. Выберите птицу из списка",
      isBirdPicked: false,
      bird: null,
    },
  };

  componentDidMount() {
    let randNumber = this.takeRandomNumber(0, this.state.birdsData.length - 1);
    this.setState({
      ...this.state,
      birdsData: this.addAnswerColorState(this.state.birdsData),
      question: data[0][randNumber],
    });
  }

  addAnswerColorState = (arr) => {
    return arr.map((item) => {
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

  addScore = () => {
    this.setState({
      ...this.state,
      score: this.state.score + this.state.points,
    });
  };

  reducePoints = () => {
    this.setState({
      ...this.state,
      points: this.state.points - 1,
    });
  };

  changeBirdsData = () => {
    if (data.length < this.state.currentArrayWithBirds + 2) {
      return;
    }
    this.setState({
      ...this.state,
      currentArrayWithBirds: this.state.currentArrayWithBirds + 1,
      birdsData: data[this.state.currentArrayWithBirds + 1],
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

  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <Header
            data={data}
            score={this.state.score}
            scoreHandler={this.addScore}
          />
          <Question questionData={this.state.question} />
          <div className="app-answers-description">
            <Answers
              birdsData={this.state.birdsData}
              pickBird={this.pickBird}
              changeAnswerColorState={this.changeAnswerColorState}
            />
            <Description description={this.state.description} />
          </div>
          <button type="button" onClick={this.changeBirdsData} className="next-level btn btn-primary">Change Birds data</button>
        </div>
      </div>
    );
  }
}
