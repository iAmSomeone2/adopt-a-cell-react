var paper = Raphael("adopt", 1343, 480);
var cellPath = "M8,3 h25 l3,3 v25 l-3,3 h-25 l-3,-3 v-25 l3,-3";

var unadoptedColor = "#656274";
var adoptedColor = "#00005D";

var cellLocations = {
    "threeByThreeX": [0, 32, 64, 0, 32, 64, 0, 32, 64], 
    "threeByThreeY": [0, 0, 0, 32, 32, 32, 64, 64, 64],
    "twoByThreeX": [0, 32, 64, 0, 32, 64],
    "twoByThreeY": [0, 0, 0, 32, 32, 32],
    "oneByThreeX": [0, 32, 64],
    "oneByThreeY": [0, 0, 0],
    "fourByThreeX": [0, 32, 64, 0, 32, 64, 0, 32, 64, 0, 32, 64], 
    "fourByThreeY": [0, 0, 0, 32, 32, 32, 64, 64, 64, 96, 96, 96],
    "lDownX": [0, 32, 64, 64],
    "lDownY": [0, 0, 0, 32],
    "lUpX": [0, 32, 64, 64],
    "lUpY": [0, 0, 0, -32],
    "threeByOneX": [0, 0, 0],
    "threeByOneY": [0, 32, 64]
};

// 3 cell length = 96px
// 3px spacing b/w modules

var moduleLocations = [
    ["threeByThree", 0, 0],
    ["threeByThree", 0, 99],
    ["threeByThree", 0, 233],
    ["threeByThree", 0, 332],

    ["threeByThree", 99, 0],
    ["twoByThree", 99, 99],
    ["twoByThree", 99, 265],
    ["threeByThree", 99, 332],

    ["fourByThree", 198, 0],
    ["fourByThree", 198, 300],

    ["threeByThree", 297, 0],
    ["oneByThree", 297, 102],
    ["oneByThree", 297, 294],
    ["threeByThree", 297, 332],

    ["threeByThree", 396, 0],
    ["lDown", 396, 102],
    ["lUp", 396, 294],
    ["threeByThree", 396, 332],

    ["threeByOne", 495, 0],
    ["threeByOne", 495, 332],

    ["threeByThree", 530, 15],
    ["threeByThree", 530, 114],
    ["threeByThree", 530, 213],
    ["threeByThree", 530, 312],

    ["threeByThree", 629, 15],
    ["threeByThree", 629, 114],
    ["threeByThree", 629, 213],
    ["threeByThree", 629, 312],

    ["threeByThree", 728, 15],
    ["threeByThree", 728, 114],
    ["threeByThree", 728, 213],
    ["threeByThree", 728, 312],

    ["threeByOne", 827, 15],
    ["threeByOne", 827, 114],
    ["threeByOne", 827, 213],
    ["threeByOne", 827, 312],

    ["threeByThree", 862, 15],
    ["threeByThree", 862, 114],
    ["threeByThree", 862, 213],
    ["threeByThree", 862, 312],

    ["threeByThree", 961, 15],
    ["threeByThree", 961, 114],
    ["threeByThree", 961, 213],
    ["threeByThree", 961, 312],

    ["threeByThree", 1060, 15],
    ["threeByThree", 1060, 114],
    ["threeByThree", 1060, 213],
    ["threeByThree", 1060, 312],

    ["threeByOne", 1159, 15],
    ["threeByOne", 1159, 114],
    ["threeByOne", 1159, 213],
    ["threeByOne", 1159, 312], // 386 cells so far

];

var array = [];

function makeModule(size, shiftX, shiftY) {
    var module = [];
    var x = cellLocations[size + "X"];
    var y = cellLocations[size + "Y"];
    for (var i = 0; i < x.length; i++) {
        var cell = paper.path(cellPath).attr({fill: unadoptedColor, stroke: "none"});
        var newX = x[i] + shiftX;
        var newY = y[i] + shiftY;
        cell.transform("t" + newX + "," + newY);
        module.push(cell.clone());
    }
    return module;
}

function countCells() {
    var cellCount = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            cellCount++;
        }
    }
    console.log(cellCount);
}

function parseAdopters() {
// $(array[0][0].node).attr({fill: adoptedColor});
    var flattenArray = $.map(array, function(item){ return item });
   var file_URL = 'http://web.mit.edu/solar-cars/www/adopt/js/adopters.JSON';

    var counter = 0;

    $.getJSON(file_URL, function(data) {
        for (var i = 0; i < data.length; i++) {
            var name = data[i].name;
            var cells = data[i].cells;

            for (var j = counter; j < counter+cells; j++) {
                $(flattenArray[j].node)
                    .attr({fill: adoptedColor})
                    .qtip({
                        content: { text: name + " (cell #" + (j+1) + ")" },
                        position: { corner:{ target: 'topRight', tooltip: 'bottomLeft'} },
                        'font-size': '20px'
                    })
                    .attr("class", "adopted");
            }

            counter = counter + cells;
        }
    });
}

$(document).ready(function() {
    for (var i = 0; i < moduleLocations.length; i++) {
        array.push(makeModule.apply(this, moduleLocations[i]));
    }

    parseAdopters();

});

