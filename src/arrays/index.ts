import {Reduce} from "./reduce";
import {Map} from "./map";
import {ForEach} from "./forEach";
import {ModuleWrapper} from "../common/sample-wrapper";

export class Arrays implements ModuleWrapper {

  constructor() {
    this.execute();
  }

  execute() {
    let reduce = new Reduce();

    let map = new Map();

    let forEach = new ForEach();
  }
}
