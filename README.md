![F1 TV graphics in CSS](images/header.png)

## Usage

Link to the CSS file in the head tag:

```html
<link rel="stylesheet" href="formula1.css">
```

You can either type the HTML out by hand, or use the script within test.html.

### By hand

The format is the following:

```html
<div class="f1 nameplate-short">
    <div class="grid [grid-state]">
        <span>[grid-position]</span>
    </div>
    <div class="separator">
        <div class="color-bg-[team]"></div>
    </div>
    <div class="driver">
        <div class="name">
            <span class="firstname">[first-name]</span><span class="lastname">[last-name]</span>
        </div>
        <div class="constructor">[constructor-name]</div>
    </div>
    <div class="ident">
        <div class="number">[driver-number]</div>
        <div class="abbreviation">[driver-abbreviation]</div>
    </div>
</div>
```

### With script

To create name plates automatically, add the following line just before the closing body tag:

```html
<script src="formula1.js"></script>
```

Then, after you included the script file, call `NewNameplate(json, target)`, which creates and inserts the name plate into the DOM. It takes a JSON object and the parent element's selector to where you want to place it. The JSON object has this context:

```json
{
    "grid": {
        "position": 1,
        "state": "ontrack"
    },
    "color": "williams",
    "firstname": "Robert",
    "lastname": "Kubica",
    "constructor": "Williams",
    "number": 88,
    "abbreviation": "KUB"
}
```

The driver's last name and abbreviation is automatically capitalized by the CSS. `color` needs to be in lowercase to match the CSS classes. `grid.state` is one of three, see Grid colors.

## Prerequisites

You need to install the `Formula1 Display` font to your system to render the text correctly.

To create custom colors (see below), you need a Sass compiler.

## Differences

The world feed uses a slightly different font (see: capital `M`). Sizes are not the exact same between the world feed and the CSS. The colors are taken from [this reddit post](https://www.reddit.com/r/formula1/comments/arxt0r/f1_2019_team_colors_hex_codes/). TV compression may render colors and shapes in a different way.

## Comparison

TV broadcast graphics:

![Captured TV broadcast graphics.](images/screenshot-tv.png)

Recreated using CSS (from test.html):

![Recreated TV graphics.](images/screenshot-cssv2.png)

## Grid-colors

The grid position can be colored to three styles:

- `"grid.state": "ontrack"`: black on white
- `"grid.state": "inpit"`: black on gray
- `"grid.state": "eliminated"`: white on red

![Grid colors: black on white, black on gray, and white on red.](images/grid-color.png)

## Team colors

Team colors are: `.color-[type]-[team]` where:

- `[type]` is

  - `text` for text color or
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