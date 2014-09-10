// socket.on('/muse/eeg', function (data) {
//     document.getElementById('eeg0').innerHTML = data[0].value;
//     document.getElementById('eeg1').innerHTML = data[1].value;
//     document.getElementById('eeg2').innerHTML = data[2].value;
//     document.getElementById('eeg3').innerHTML = data[3].value;
// });
// socket.on('/muse/eeg/quantization', function (data) {
//     document.getElementById('q0').innerHTML = data[0].value;
//     document.getElementById('q1').innerHTML = data[1].value;
//     document.getElementById('q2').innerHTML = data[2].value;
//     document.getElementById('q3').innerHTML = data[3].value;
// });
// socket.on('/muse/acc', function(data){
//     document.getElementById('acc0').innerHTML = data[0].value;
//     document.getElementById('acc1').innerHTML = data[1].value;
//     document.getElementById('acc2').innerHTML = data[2].value;
// });
// socket.on('/muse/drlref', function(data){
//     document.getElementById('drlref0').innerHTML = data[0].value;
//     document.getElementById('drlref1').innerHTML = data[1].value;
// });
// socket.on('/muse/dsp/elements/low_freqs', function (data) {
//     document.getElementById('low_freqs0').innerHTML = data[0].value;
//     document.getElementById('low_freqs1').innerHTML = data[1].value;
//     document.getElementById('low_freqs2').innerHTML = data[2].value;
//     document.getElementById('low_freqs3').innerHTML = data[3].value;
// });
var highLatency = 0;
var lowLatency = 100;
socket.on('/muse/dsp/elements/alpha', function (data) {
    document.getElementById('alpha0').innerHTML = data['args'][0].value;
    document.getElementById('alpha1').innerHTML = data['args'][1].value;
    document.getElementById('alpha2').innerHTML = data['args'][2].value;
    document.getElementById('alpha3').innerHTML = data['args'][3].value;
    // document.getElementById('alphalatency').innerHTML = data
    var latency = Date.now() - data.timeInMs;
    console.log(latency+"ms latency"); //measures latency to the browser

    if(latency > highLatency){
      highLatency = latency;
    }else if(latency < lowLatency){
      lowLatency = latency;
    }
    console.log('Latency Range: '+lowLatency+"ms - "+highLatency+"ms");
});
// socket.on('/muse/dsp/elements/beta', function (data) {
//     document.getElementById('beta0').innerHTML = data[0].value;
//     document.getElementById('beta1').innerHTML = data[1].value;
//     document.getElementById('beta2').innerHTML = data[2].value;
//     document.getElementById('beta3').innerHTML = data[3].value;
// });
// socket.on('/muse/dsp/elements/delta', function (data) {
//     document.getElementById('delta0').innerHTML = data[0].value;
//     document.getElementById('delta1').innerHTML = data[1].value;
//     document.getElementById('delta2').innerHTML = data[2].value;
//     document.getElementById('delta3').innerHTML = data[3].value;
// });
// socket.on('/muse/dsp/elements/gamma', function (data) {
//     document.getElementById('gamma0').innerHTML = data[0].value;
//     document.getElementById('gamma1').innerHTML = data[1].value;
//     document.getElementById('gamma2').innerHTML = data[2].value;
//     document.getElementById('gamma3').innerHTML = data[3].value;
// });
// socket.on('/muse/dsp/elements/theta', function (data) {
//     document.getElementById('theta0').innerHTML = data[0].value;
//     document.getElementById('theta1').innerHTML = data[1].value;
//     document.getElementById('theta2').innerHTML = data[2].value;
//     document.getElementById('theta3').innerHTML = data[3].value;
// });
// socket.on('/muse/dsp/elements/horseshoe', function (data) {
//     document.getElementById('horseshoe0').innerHTML = data[0].value;
//     document.getElementById('horseshoe1').innerHTML = data[1].value;
//     document.getElementById('horseshoe2').innerHTML = data[2].value;
//     document.getElementById('horseshoe3').innerHTML = data[3].value;
// });
// socket.on('/muse/dsp/elements/is_good', function (data) {
//     document.getElementById('is_good0').innerHTML = data[0].value;
//     document.getElementById('is_good1').innerHTML = data[1].value;
//     document.getElementById('is_good2').innerHTML = data[2].value;
//     document.getElementById('is_good3').innerHTML = data[3].value;
// });
// socket.on('/muse/dsp/elements/blink', function (data) {
//     document.getElementById('blink').innerHTML = data[0].value;
// });
// socket.on('/muse/dsp/elements/jaw_clench', function (data) {
//     document.getElementById('jaw_clench').innerHTML = data[0].value;
// });
// socket.on('/muse/dsp/elements/touching_forehead', function (data) {
//     document.getElementById('touching_forehead').innerHTML = data[0].value;
// });
