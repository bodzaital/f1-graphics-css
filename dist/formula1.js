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
	name.appendChild(firstname);
	name.appendChild(lastname);
	let team = ElementAndClass("div", "constructor");
	team.innerText = json.constructor;
	driver.appendChild(name);
	driver.appendChild(team);
	a.appendChild(driver);

	let ident = ElementAndClass("div", `ident color-text-${json.color}`);
	let number = ElementAndClass("div", "number");
	number.innerText = json.number;
	let abbr = ElementAndClass("div", "abbreviation");
	abbr.innerText = json.abbreviation;
	ident.appendChild(number);
	ident.appendChild(abbr);
	a.appendChild(ident);

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