function ElementAndClass(x, y) {
	let a = document.createElement(x);
	a.classList = y;
	return a;
}

function NewNameplate(json, target) {
	let a = ElementAndClass("div", "f1 nameplate-short");

	let grid = ElementAndClass("div", `grid grid-${json.grid.state}`);
	let span = document.createElement("span");
	span.innerText = json.grid.position;
	grid.appendChild(span);
	a.appendChild(grid);

	let sep = ElementAndClass("div", "separator");
	let sep_inner = ElementAndClass("div", `color-bg-${json.color}`);
	sep.appendChild(sep_inner);
	a.appendChild(sep);

	let driver = ElementAndClass("div", "driver");
	let name = ElementAndClass("div", "name");
	let firstname = ElementAndClass("span", "firstname");
	firstname.innerText = json.firstname;
	let lastname = ElementAndClass("span", "lastname");
	lastname.innerText = json.lastname;
	let number = ElementAndClass("span", `number color-glow-${json.color}`);
	number.innerText = json.number;
	name.appendChild(firstname);
	name.appendChild(lastname);
	name.appendChild(number);
	let team = ElementAndClass("div", "constructor");
	team.innerText = json.constructor;
	driver.appendChild(name);
	driver.appendChild(team);
	a.appendChild(driver);

	let flag_container = ElementAndClass("div", "flag-container");
	let primary_gloss = ElementAndClass("div", "primary-gloss");
	let secondary_gloss = ElementAndClass("div", "secondary-gloss");

	let driver_nationality = ElementAndClass("div", "driver-nationality");
	driver_nationality.style = `background-image: linear-gradient(to bottom left, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url('https://flagcdn.com/${json.nationality}.svg');`;

	let secondary_overlay = ElementAndClass("div", "secondary-overlay");
	let shadow = ElementAndClass("div", "shadow");

	driver_nationality.appendChild(secondary_overlay);
	driver_nationality.appendChild(shadow);

	flag_container.appendChild(primary_gloss);
	flag_container.appendChild(secondary_gloss);
	flag_container.appendChild(driver_nationality);

	a.appendChild(flag_container);

	document.querySelector(target).appendChild(a);

	FixGridWidth();
}

// Make the grid position the same width as height. Cannot be done in CSS as the height is dynamic.
function FixGridWidth()
{
	let q = document.querySelectorAll(".grid");
	q.forEach(e => {
		e.style.width = `${e.clientHeight}px`;
	});
}