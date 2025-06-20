import { Component } from "react";

interface HeaderProps {
  password: string[];
  generatePassword(): void;
}

export default class Header extends Component<HeaderProps> {
  copy = () => {
    if (this.props.password.length !== 0) {
      navigator.clipboard.writeText(this.props.password.join("")).then(() => {
        alert("copied!");
      });
    }
  };
  render() {
    return (
      <div className="shadow-lg flex p-2 h-[70px] justify-between items-center w-full">
        <div>{this.props.password.join("")}</div>
        <div className="flex gap-2">
          <button className="cursor-pointer" onClick={this.copy}>copy</button>
          <button className="cursor-pointer" onClick={this.props.generatePassword}>refresh</button>
        </div>
      </div>
    );
  }
}
