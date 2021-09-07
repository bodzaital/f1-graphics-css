'use strict';
class Grid {
}
class Driver {
}
function CreateElement(elementName, classList = null) {
    let element = document.createElement(elementName);
    if (classList != null) {
        classList.forEach((list) => {
            element.classList.add(list);
        });
    }
    return element;
}
function NewNameplate(json, target) {
    let container = CreateElement("div", ["f1", "nameplate-short"]);
    // Create the grid position box.
    let grid = CreateElement("div", ["grid", `grid-${json.grid.state}`]);
    let span = CreateElement("span");
    span.innerText = json.grid.position.toString();
    grid.appendChild(span);
    container.appendChild(grid);
    // Create the team colored separator.
    let separator_container = CreateElement("div", ["separator"]);
    let separator = CreateElement("div", [`color-bg-${json.color}`]);
    separator_container.appendChild(separator);
    container.appendChild(separator_container);
    // Create the driver name.
    let driver = CreateElement("div", ["driver"]);
    let name = CreateElement("div", ["name"]);
    let firstname = CreateElement("span", ["firstname"]);
    firstname.innerText = json.firstname;
    let lastname = CreateElement("span", ["lastname"]);
    lastname.innerText = json.lastname;
    let number = CreateElement("span", ["number", `color-glow-${json.color}`]);
    number.innerText = json.number.toString();
    name.appendChild(firstname);
    name.appendChild(lastname);
    name.appendChild(number);
    let team = CreateElement("div", ["constructor"]);
    team.innerText = json.team;
    driver.appendChild(name);
    driver.appendChild(team);
    container.appendChild(driver);
    // Create the flag.
    let flag_container = CreateElement("div", ["flag-container"]);
    let flag = CreateElement("div", ["driver-nationality"]);
    // Turning off SVG.preserveAspectRatio: https://stackoverflow.com/a/29257727
    flag.style.backgroundImage = `linear-gradient(to bottom left, black 0%, transparent 30%, transparent 70%, black 100%), url('https://flagcdn.com/${json.nationality}.svg#svgView(preserveAspectRatio(none))'), linear-gradient(to bottom left, ${json.flagbg}, ${json.flagbg})`;
    flag.style.backgroundSize = json.flagsize;
    let secondary_overlay = CreateElement("div", ["secondary-overlay"]);
    let shadow = CreateElement("div", ["shadow"]);
    flag.appendChild(secondary_overlay);
    flag.appendChild(shadow);
    flag_container.appendChild(flag);
    container.appendChild(flag_container);
    document.querySelector(target).appendChild(container);
    FixGridWidth();
}
// Make the grid position the same width as height. Cannot be done in CSS as the height is dynamic.
function FixGridWidth() {
    let q = document.querySelectorAll(".grid");
    q.forEach((e) => {
        e.style.width = `${e.clientHeight}px`;
    });
}
