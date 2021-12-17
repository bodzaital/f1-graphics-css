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
    Create(target) {
        let container = document.createElement("div");
        container.classList.add("f1", "nameplate-short");
        let position = document.createElement("div");
        position.classList.add("position", this.context.grid.state);
        position.innerText = this.context.grid.position.toString();
        let separator = document.createElement("div");
        separator.classList.add("separator");
        let teamColor = document.createElement("div");
        teamColor.classList.add(`${this.context.color}-bg`);
        separator.appendChild(teamColor);
        let nameAndTeam = document.createElement("div");
        nameAndTeam.classList.add("name-and-team");
        let nameAndNumber = document.createElement("div");
        nameAndNumber.classList.add("name-and-number");
        let name = document.createElement("div");
        name.classList.add("name");
        let firstname = document.createElement("span");
        firstname.classList.add("firstname");
        firstname.innerText = this.context.firstname;
        let lastname = document.createElement("span");
        lastname.classList.add("lastname");
        lastname.innerText = this.context.lastname.toUpperCase();
        name.appendChild(firstname);
        name.appendChild(lastname);
        let number = document.createElement("div");
        number.classList.add("number");
        number.classList.add(`${this.context.color}-text`);
        number.innerText = this.context.number.toString();
        nameAndNumber.appendChild(name);
        nameAndNumber.appendChild(number);
        let team = document.createElement("div");
        team.classList.add("team");
        team.innerText = this.context.team;
        nameAndTeam.appendChild(nameAndNumber);
        nameAndTeam.appendChild(team);
        let flagContainer = document.createElement("div");
        flagContainer.classList.add("flag-container");
        let flag = document.createElement("div");
        flag.classList.add("flag");
        flag.style.backgroundImage = `linear-gradient(65deg, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 80%), url('https://flagcdn.com/${this.context.flag}.svg')`;
        flagContainer.appendChild(flag);
        container.appendChild(position);
        container.appendChild(separator);
        container.appendChild(nameAndTeam);
        container.appendChild(flagContainer);
        target.appendChild(container);
    }
}
