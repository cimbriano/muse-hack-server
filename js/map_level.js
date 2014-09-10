var lights_level = 3;
var level = 0;
var time_of_last = Date.now();
initLights();

socket.on('/muse/dsp/elements/alpha', function (data) {
    var total = 0;
    var active = 0;
    var avgAlpha = 0;
    data.forEach(function(datum){
      if(datum.value){
        total = total + datum.value;
        active = active + 1;
      }
      avgAlpha = total/active;
    });

    level = alphaLevelMap(avgAlpha);

    if((Date.now() - time_of_last) > 2000){
      if(lights_level != level){
        change(lights_level, level);
        lights_level = level;
        time_of_last = Date.now();
      }
    }
});
