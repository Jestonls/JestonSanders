
    

var randomSounds = [
    {name: "nuke" ,source: "<audio id='audio' src='./images/nuke.wav' >" + "</audio>"},
    {name: "crystal" ,source: "<audio id='audio' src='./images/crystal.wav' >" + "</audio>"},
    {name: "wave" ,source: "<audio id='audio' src='./images/metal.wav' >" + "</audio>"}
    ];
    var soundShifter = randomSounds[0].source;


for (let z = 0; z < randomSounds.length; z++) {
function nextItem() {
z = z + 1;
z = z % randomSounds.length;
return randomSounds[z];
}   



$( "#audio").click(function() {
    nextItem($(this).html(randomSounds[z].source));
});
}


function play(){
    $(soundShifter).appendTo('#audio');
    var audio = document.getElementById("audio");
    audio.currentTime = 0
    audio.play();
    console.log('playing');
    }