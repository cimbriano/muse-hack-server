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

    level = Math.round(avgAlpha.map(0.1, 0.6, 0, 7));
});