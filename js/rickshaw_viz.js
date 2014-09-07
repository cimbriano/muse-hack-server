 var palette = new Rickshaw.Color.Palette({ scheme: 'spectrum14' });

var time_value = 250;
var max_data_points = 10;
var time_base = new Date().getTime() / 1000;


var eeg_graph = new Rickshaw.Graph({
	element: document.getElementById('eeg_graph'),
	width: 900,
	height: 500,
	renderer: 'line',
	series: new Rickshaw.Series.FixedDuration([{name: 'default'}], undefined, {
		timeInterval: time_value,
		maxDataPoints: max_data_points,
		timeBase: time_base
	})

});

var eeg_y_axis = new Rickshaw.Graph.Axis.Y({
	graph: eeg_graph,
	orientation: 'left',
	tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
	element: document.getElementById('eeg_y_axis')
});

eeg_graph.render();

var new_data = {};
socket.on('/muse/eeg', function(data){
	
	new_data[0] = data[0].value
	new_data[1] = data[1].value
	new_data[2] = data[2].value
	new_data[3] = data[3].value

	eeg_graph.series.addData(new_data);
	eeg_graph.render();
});