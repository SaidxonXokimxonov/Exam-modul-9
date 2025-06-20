import { Component } from "react";
import type { Check } from "../app";

interface CheckboxProps {
    item: Check;
    toggleCheckBox(val: boolean, idx:number): void;
    idx:number
}

export default class Checkbox extends Component<CheckboxProps> {

    toggle = () => {
        this.props.toggleCheckBox(!this.props.item.isChecked, this.props.idx)
    } 
  render() {
    return <div className="flex gap-1">
         <input type="checkbox" onChange={this.toggle} checked={this.props.item.isChecked}/>
         <h4>{this.props.item.title}</h4>
    </div>;
  }
}
