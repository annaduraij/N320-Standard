/**
 * Author: Jay Annadurai
 * Date: 11 Sep 2023
 * File: app.js
 * Project: N320-Base
 * Description: Classes
 */

//Import Classes to Build HTML via JS

//Define Path to Root
const pathToRoot = '../../'

//Import the Modules
import {HTMLasJS,HJShortcuts, UtilHTML,Console} from "../../Library/Modules/HTMLasJS.js";

//Inject CSS into the Head
HJShortcuts.injectCSS(pathToRoot);

//Build a Wrapper onto the Page
let wrapperHTML = HJShortcuts.buildWrapper();

//Build a HTML Console onto the Page
wrapperHTML.get().appendChild(Console.generateConsole().build());


//***** Classes *****//

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log (`Welcome ${this.name}! We have your age as ${this.age} years old.`)
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }

    greeting() {
        super.greeting();
        console.log(`${this.name}'s major is listed as ${this.major}`);
    }
}

let jay = new Person  ("Jay",22);
let laura = new Student  ("Laura",19,"Linguistics");
jay.greeting(); laura.greeting();