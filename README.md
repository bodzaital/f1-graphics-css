![F1 TV graphics in CSS](images/header-v2021.png)

*Updated driver nameplates for the 2021 world feed*

## Usage

1. Link to the CSS file in the head element:

```html
<head>
	...
	<link rel="stylesheet" href="formula1.css">
	...
</head>
```

2. Link to the JS file at the bottom of the body element:

```html
<body>
	...
	<script src="formula1.js"></script>
</body>
```

3. Generate nameplates with the context objects: 

`NewNameplate(context, target)`: adds a new nameplate as the target element's child.

*Example:*

```json
driver = {
    "grid": {
        "position": 1,
        "state": "ontrack"
    },
    "color": "williams",
    "firstname": "Robert",
    "lastname": "Kubica",
    "constructor": "Williams",
    "number": 88,
    "abbreviation": "KUB",
	"nationality": "pl"
}

NewNameplate("driver", "body");
```

The driver's last name and abbreviation is automatically capitalized by the CSS. 

For `color` and `grid.state`, see below.

## Prerequisites

You need to install the `Formula1 Display` font to your system to render the text correctly.

To create custom colors (see below), you need a Sass compiler.

## Differences

The world feed uses a slightly different font (see: capital `M`). Sizes are not the exact same between the world feed and the CSS. The 2021 colors are taken from [this reddit post](https://www.reddit.com/r/formula1/comments/m18iwo/new_team_colors_again_from_formula1com_compared/). TV compression may render colors and shapes in a different way.

The flags are automatically downloaded from flagcdn.com. The proportions and the visible parts, and effects are different than those on the world feed. For available flags, see https://flagcdn.com/en/codes.json.

There's a bug where the glow/sheen effect to the left of the flag are missing — this will be fixed later.

## Comparison

### v2018

TV broadcast graphics:

![Captured TV broadcast graphics.](images/screenshot-tv.png)

Recreated using CSS:

![Recreated TV graphics.](images/screenshot-cssv2.png)

### v2021

TV broadcast graphics:

![Captured TV broadcast graphics.](images/screenshot-tv-v2021.png)

Recreated using CSS (from test.html):

![Recreated TV graphics.](images/screenshot-v2021.png)

## Grid colors

The grid position can be colored to three styles:

- `"grid.state": "ontrack"`: black on white
- `"grid.state": "inpit"`: black on gray
- `"grid.state": "eliminated"`: white on red

These can be used as the following classes:

- `grid grid-ontrack`
- `grid grid-inpit`
- `grid grid-eliminated`

![Grid colors: black on white, black on gray, and white on red.](images/grid-color.png)

You can add custom grid colors by adding it either `$grid.blacktext` or `$grid.whitetext` lists:

```scss
$grid-blacktext: (
    ("inpit",   rgb(160, 160, 160)),
    ("ontrack", rgb(255, 255, 255)),
    ("dnf",     rgb(255, 255, 0))
);

$grid-whitetext: (
    ("inpit",   rgb(160, 160, 160)),
    ("dns",     rgb(128, 255, 128))
);
```

## Team colors

Team colors are: `.color-[type]-[team]` where:

- `[type]` is

  - `text` for text color, or
  - `bg` for background color

- `[team]` is

  - `mercedes`
  - `ferrari`
  - `redbull`
  - `renault`
  - `haas`
  - `tororosso`
  - `williams`
  - `racingpoint`
  - `alfaromeo`
  - `mclaren`

Example: `<div class="color-bg-mercedes"></div>`

To add or change colors, add a new row to the `_colors.scss` partial's `$teams` variable like this:

```scss
$teams: (
	. . .
	("alfaromeo",   rgb(155,   0,   0)),
	("mclaren",     rgb(255, 135,   0)),
	("my-team",     rgb(135, 135, 135))
);