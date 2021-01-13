console.log("what the fuck");
var randomColors = [ 
{name: "red" ,rgb: ["rgb(245,66,66)"]},
{name: "yellow" ,rgb: ["rgb(245,245,66)"]},
{name: "lime" ,rgb: ["rgb(66,245,66)"]},
{name: "topz" ,rgb: ["rgb(66,245,245)"]},
{name: "purple" ,rgb: ["rgb(66,66,245)"]},
{name: "fushia" ,rgb: ["rgb(245,66,245)"]}
];

for (let i = 0; i < randomColors.length; i++) {
    function nextItem() {
    i = i + 1; // increase i by one
    i = i % randomColors.length; // if we've gone too high, start from `0` again
    return randomColors[i]; // give us back the item of where we are now
}


$( "#application" ).click(function() {
nextItem($(this).css('background-color', randomColors[i].rgb));
});
}

var randomShapes = [
    {name: "circle" ,svg: "<svg viewbox='-180 -60 360 360'>" + "<circle cx='0' cy='0' r='60' width='60' height='60'/>" + "</svg>"},
    {name: "triangle" ,svg: "<svg viewbox='-90 -5 360 180'>" + "<polygon points='90,0 0,90 180,90' width='50' height='50'/>" + "</svg>"},
    {name: "pyramid" ,svg: "<svg viewbox='-110 -5 360 360'>" + "<polygon points='70,0 140,70 70,115 0,70' width='50' height='50'/>" + "</svg>"},
    {name: "polygon" ,svg: "<svg viewbox='-120 -5 360 360'>" + "<polygon points='120.5,52.3 90.5,104.3 30.5,104.3 .5,52.3 30.5,.37 90.5,.37 120.5,52.3' width='50' height='50'/>"  + "</svg>"},
    {name: "star" ,svg: "<svg viewbox='-130 0 360 180'>" + "<polygon points='50,5 20,99 95,39 5,39 80,99' width='50' height='50'/>"  + "</svg>"},
    {name: "square" ,svg: "<svg viewbox='-65 -5 180 180'>" + "<rect x='0' y='0' rx='0' ry='0' width='50' height='50'/>"  + "</svg>"},
    {name: "bevelledSquare" ,svg: "<svg viewbox='-65 -5 180 720'>" + "<rect x='0' y='0' rx='10' ry='10' width='50' height='50'/>"  + "</svg>"},
   
];

var randomSounds = [
    {name: "zap" ,source: "<audio id='audio' src='./images/zap01.ogg' >" + "</audio>"},
    {name: "zap" ,source: "<audio id='audio' src='./images/zap02.ogg' >" + "</audio>"},
    {name: "zap" ,source: "<audio id='audio' src='./images/zap03.ogg' >" + "</audio>"},
];

var shapeShifter = randomShapes[0].svg;
var soundChanger = randomSounds[0].source;
    
    for (let j = 0; j < randomShapes.length; j++) {
    function nextItem() {
        j = j + 1;
        j = j % randomShapes.length;
        return randomShapes[j];
    }   


    $( "#shape" ).click(function() {
        nextItem($(this).html(randomShapes[j].svg));
        });
       
    $(shapeShifter).appendTo('#shape');
 }


 for (let z = 0; z < randomSounds.length; z++) {
    function nextItem() {
        z = z + 1;
        z = z % randomSounds.length;
        return randomSounds[z];
    }   

    $(soundChanger).appendTo('#application');
            }

    function play(){
        var audio = document.getElementById("audio");
        audio.play();
                  }
