![F1 TV graphics in CSS](images/header-v2021.png)

A small CSS file to emulate the 2021 TV graphics of the Formula 1 world feed.

## Usage

1. Link to the CSS file in the head element:

```html
<head>
	...
	<link rel="stylesheet" href="formula1_v2.css">
	...
</head>
```

2. Link to the JS file at the bottom of the body element:

```html
<body>
	...
	<script src="formula1_v2.js"></script>
</body>
```

3. Generate nameplates:

Example:

```html
<div class="container">

</div>
<script src="../dist/formula1_v2.js"></script>
<script>
	let driver = {
		"grid": {
			"position": 1,
			"state": "ontrack"
		},
		"color": "redbull",
		"firstname": "Max",
		"lastname": "Verstappen",
		"team": "Red Bull",
		"number": 33,
		"abbreviation": "VER",
		"flag": "nl"
	};

	new Nameplate(driver).Create(document.querySelector(".container"));
</script>
```

1. Create a driver object that has the following fields:

```
grid: {position: number, state: string}
color: string
firstname: string
lastname: string
team: string
number: number
abbreviation: string
flag: string
```

The grid state can be one of `ontrack`, `inpit`, or `eliminated`.

The color must be one of `mercedes`, `ferrari`, `redbull`, `alpine`, `alphatauri`, `haas`, `williams`, `astonmartin`, `alfaromeo`, `mclaren` or another defined color in `_colors.scss`.

The flag must be an ISO 3166 country code defined in https://flagcdn.com/en/codes.json.

2. Call `new Nameplate(driver).Create(target)`

`driver` is the driver object.

`target` is the target HTML element where the nameplate will be inserted.


## Prerequisites

The fonts are directly linked from the F1 website.

To create custom colors (see below), you need a Sass compiler.

## Differences

The world feed uses a slightly different font (see: capital `M`). Sizes are not the exact same between the world feed and the CSS. The 2021 colors are taken from [this reddit post](https://www.reddit.com/r/formula1/comments/m18iwo/new_team_colors_again_from_formula1com_compared/). TV compression may render colors and shapes in a different way.

The flags are automatically downloaded from flagcdn.com. The proportions and the visible parts, and effects are different than those on the world feed. For available flags, see https://flagcdn.com/en/codes.json.

There's a bug where the glow/sheen effect to the left of the flag are missing — this will be fixed later.

## Comparison

TV broadcast graphics:

![Captured TV broadcast graphics.](images/screenshot-tv-v2021.png)

Recreated using CSS (from test.html):

![Recreated TV graphics.](images/screenshot-v2021.png)

## Team colors

To add you own team color, edit the `src/_colors.scss` file, and add a new item in the `$teams` variable and recompile, like this:

```scss
$teams: (
	("mercedes",	#00d2be),
	("ferrari",		#dc0000),
	("redbull",		#0600ef),
	("alpine",		#0090ff),
	("haas",		#ffffff),
	("alphatauri",	#2b4562),
	("williams",	#005aff),
	("astonmartin",	#006f62),
	("alfaromeo",	#900000),
	("mclaren",		#ff8700),
	("myteam",		#950245)
);
```