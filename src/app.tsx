import { Component } from "react";
import Header from "./components/header";
import Customize from "./components/customize";

export interface Check {
  title: string;
  isChecked: boolean;
}

interface State {
  rangeValue: number;
  numbers: string[];
  symbols: string[];
  upperCase: string[];
  loverCase: string[];
  password: string[];
  checkboxes: Check[];
}

export default class App extends Component {
  state: State = {
    rangeValue: 0,
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    symbols: ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"],
    upperCase: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
    ],
    loverCase: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
    ],
    password: [],
    checkboxes: [
      { title: "LowerCase", isChecked: false },
      { title: "UpperCase", isChecked: true },
      { title: "Symbols", isChecked: false },
      { title: "Numbers", isChecked: false },
    ],
  };

  handleRangeValue = (val: string) => {
    if (Number(val) <= 50) this.setState({ rangeValue: val }, ()=> {
        this.generatePassword();
    });
  };

  toggleCheckBox = (val: boolean, idx: number) => {
    this.state.checkboxes[idx].isChecked = val;
    this.setState(this.state.checkboxes);

    console.log(this.state.checkboxes);
    this.generatePassword();
  };

  componentDidMount(): void {
    this.generatePassword();
  }

  generatePassword = () => {
    const a: string[] = [];

    this.state.checkboxes.map((item) => {
      if (item.title === "LowerCase" && item.isChecked) {
        a.push(...this.state.loverCase);
      }
      if (item.title === "UpperCase" && item.isChecked) {
        a.push(...this.state.upperCase);
      }
      if (item.title === "Symbols" && item.isChecked) {
        a.push(...this.state.symbols);
      }
      if (item.title === "Numbers" && item.isChecked) {
        a.push(...this.state.numbers);
      }
    });

     a.sort(() => Math.random() - 0.5);


    this.setState((this.state.password = a.slice(0,this.state.rangeValue)));
  };

  render() {
    return (
      <div className=" rounded-md overflow-hidden w-[50%]">
        <Header generatePassword={this.generatePassword} password={this.state.password} />
        <Customize
          onRangeValueChangle={this.handleRangeValue}
          rangeValue={this.state.rangeValue}
          checkboxes={this.state.checkboxes}
          toggleCheckBox={this.toggleCheckBox}
        />
      </div>
    );
  }
}
