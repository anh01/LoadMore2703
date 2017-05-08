const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.send('Server is running!!!'));

app.get('/products/:page', (req, res) => {
    //page - 1 => 0 - 4.
    //page - 2 => 5 - 9.
    //page - 3 => 10 - 14.
    const { page } = req.params;
    const startIndex = (page - 1) * 5;
    const stopIndex = page * 5;
    const result = CSS_COLOR_NAMES.slice(startIndex, stopIndex);
    res.send(result);
});

const CSS_COLOR_NAMES = [
    "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure",
    "Beige","Bisque","Black","BlanchedAlmond","Blue",
    "BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse",
    "Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson",
    "Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray",
    "DarkGrey","DarkGreen","DarkKhaki","DarkMagenta",
    "DarkOliveGreen","Darkorange","DarkOrchid","DarkRed",
    "DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
    "DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink",
    "DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
    "FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite",
    "Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew",
    "HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush",
    "LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
    "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
    "LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey",
    "LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon",
    "MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen",
    "MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed",
    "MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace",
    "Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
    "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum",
    "PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon",
    "SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue",
    "SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal",
    "Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
    "Yellow","YellowGreen"
    ];
