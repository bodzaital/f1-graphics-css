'use strict';
class GridContext {
    constructor(position, state) {
        this.position = position;
        this.state = state;
    }
}
class NameplateContext {
    constructor(grid, color, firstname, lastname, number, flag, team, abbreviation) {
        this.grid = grid;
        this.color = color;
        this.firstname = firstname;
        this.lastname = lastname;
        this.number = number;
        this.flag = flag;
        this.team = team;
        this.abbreviation = abbreviation;
    }
}
class Nameplate {
    constructor(context) {
        this.context = context;
    }
    build(name, classList) {
        let element = document.createElement(name);
        classList.forEach((e) => element.classList.add(e));
        return element;
    }
    appendChildren(target, children) {
        children.forEach((e) => target.appendChild(e));
    }
    Create(target) {
        let container = this.build("div", ["f1", "nameplate-short"]);
        let position = this.build("div", ["position"]);
        let separator = this.build("div", ["separator"]);
        let teamColor = this.build("div", [`${this.context.color}-bg`]);
        this.appendChildren(separator, [teamColor]);
        let nameAndTeam = this.build("div", ["name-and-team"]);
        let nameAndNumber = this.build("div", ["name-and-number"]);
        let name = this.build("div", ["name"]);
        let firstname = this.build("span", ["firstname"]);
        let lastname = this.build("span", ["lastname"]);
        this.appendChildren(name, [firstname, lastname]);
        let number = this.build("div", ["number", `${this.context.color}-text`]);
        this.appendChildren(nameAndNumber, [name, number]);
        let team = this.build("div", ["team"]);
        this.appendChildren(nameAndTeam, [nameAndNumber, team]);
        let flagContainer = this.build("div", ["flag-container"]);
        let flag = this.build("div", ["flag"]);
        flag.style.backgroundImage = `linear-gradient(65deg, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 80%), url('https://flagcdn.com/${this.context.flag}.svg')`;
        this.appendChildren(flagContainer, [flag]);
        this.appendChildren(container, [position, separator, nameAndTeam, flagContainer]);
        this.appendChildren(target, [container]);
        this.element = container;
        this.Fields();
        return this;
    }
    Fields() {
        let position = this.element.querySelector(".position");
        let firstname = this.element.querySelector(".firstname");
        let lastname = this.element.querySelector(".lastname");
        let number = this.element.querySelector(".number");
        let team = this.element.querySelector(".team");
        position.innerText = this.context.grid.position.toString();
        position.classList = "";
        position.classList.add("position", this.context.grid.state);
        firstname.innerText = this.context.firstname;
        lastname.innerText = this.context.lastname.toUpperCase();
        number.innerText = this.context.number;
        team.innerText = this.context.team;
    }
    UpdatePosition(grid) {
        this.context.grid = grid;
        this.Fields();
    }
}
//# sourceMappingURL=formula1_v2.js.map