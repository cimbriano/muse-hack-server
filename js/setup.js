// var socket = io('http://104.131.61.142:8080');
var socket = io('http://localhost:8080');

Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
  return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
}
