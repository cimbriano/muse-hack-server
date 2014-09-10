var socket = io('http://104.131.61.142:8080');
// var socket = io('http://localhost:8080');

Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
  return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
}

var alphaLevelMap = function(avgAlpha){
  var quantized_value = Math.round(avgAlpha.map(0.20, 0.40, 3, -1));
  if (quantized_value < 0){
    return -1;
  }else if (quantized_value > 3){
    return 3;
  }else{
    return quantized_value;
  }
}
