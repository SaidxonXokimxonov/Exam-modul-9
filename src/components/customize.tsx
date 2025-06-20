import { Component } from "react";
import type { Check } from "../app";
import Checkbox from "./checkbox";


interface CustomizeProps {
    rangeValue: number;
    onRangeValueChangle(val: string): void;
    checkboxes: Check[];
    toggleCheckBox(val: boolean, idx:number): void;
}

export default class Customize extends Component<CustomizeProps> {

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onRangeValueChangle(e.target.value)
  };
 

  render() {
    return (
      <div className="mt-5 p-5 w-full h-[300px] border">
        <div>
          <h1 className="text-3xl border-b pb-3 mb-5">
            Customize your password
          </h1>
        </div>

        <div className="flex">
          <div className="w-[50%]">
            <input
              className="w-[70px] px-4 me-3 py-2 rounded border"
              type="number"
              value={this.props.rangeValue}
              onChange={this.onInputChange}
            />
            <input
              type="range"
              max={50}
              value={this.props.rangeValue}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <div>
              {
                this.props.checkboxes.map((item,idx)=> {
                  return <Checkbox toggleCheckBox={this.props.toggleCheckBox} idx={idx} item={item}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
