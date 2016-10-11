$(document).ready(function() {
	
	myfunction(city);
	
	$("#searchbtn").click(function() {
		 city = document.getElementById("textfield").value;
		 myfunction(city);
	});

	$('#more').click(function(e) {
		e.stopPropagation();
		$('#hourstable').css({
			'height': 'auto',
		})
		$('#more').hide();
		$('#less').show();
	});

	$('#less').click(function() {
		$('#hourstable').css({
			'height': '480px'
		});
		$('#more').show();
		$('#less').hide();
	});
});
  
function myfunction(city) 
{
	var $result = $("#weather");
	var $table = $("#table1");
	var $hourly = $("#table2");
	var $forecast = $("#forecast");
	var i = 0;
	
	$.ajax({
		type: 'Get',
		url: "http://api.wunderground.com/api/6d0cbb6ac8f293bc/forecast10day/q/"+city+".json",
		success:function(data)
		{
			$result.html('<img src="'+data.forecast.simpleforecast.forecastday[0].icon_url+'"/>');
			$result.append('<h2>'+data.forecast.simpleforecast.forecastday[0].high.celsius+'</h2>');
			$result.append('<p>'+data.forecast.simpleforecast.forecastday[0].conditions+'</p>');
			$table.html('<tr><th>'+data.forecast.simpleforecast.forecastday[0].date.weekday+'</th>'+'<th>'+data.forecast.txt_forecast.date+'</th></tr>');
			$table.append('<tr><td>Description</td>'+'<td>'+data.forecast.txt_forecast.forecastday[0].fcttext_metric+'</td></tr>');
			$table.append('<tr><td>Humidity</td>'+'<td>'+data.forecast.simpleforecast.forecastday[0].avehumidity+'</td></tr>');
			$table.append('<tr><td>Wind</td>'+'<td>'+data.forecast.simpleforecast.forecastday[0].avewind.dir+' '+ data.forecast.simpleforecast.forecastday[0].avewind.kph+''+' '+'KMPH</td></tr>');
			
			$forecast.html('');
			
			$(data.forecast.simpleforecast.forecastday).each(function(index,d)
			{
				$forecast.append('<button class="btn btn-info" data-toggle="collapse" data-parent="#accordion" data-target="#day'+(++i)+'"><img src="'+d.icon_url+'" />'+''+d.date.weekday+''+', '+''+d.date.monthname+''+' '+''+d.date.day+'</button>')
				$forecast.append('<div id="day'+i+'" class="collapse"><div class="row morningforecast"><div class="col-md-6"><img src="'+d.icon_url+'" />'+'<b>'+data.forecast.txt_forecast.forecastday[index].title+'</b><br/>'+'<h4>HIGH'+':'+''+d.high.celsius+'</h4>'+'<h4>LOW'+':'+''+d.low.celsius+'</h4></div>'+'<div class="col-md-6"><b>WIND'+' '+''+d.maxwind.kph+''+'KMPH</b><p>'+data.forecast.txt_forecast.forecastday[index].fcttext_metric+'</p></div></div><hr><div class="row nightforecast"><div class="col-md-6"><img src="'+d.icon_url+'" />'+'<b>'+data.forecast.txt_forecast.forecastday[++index].title+'</b><br/>'+'<h4>HIGH'+':'+''+d.high.celsius+'</h4>'+'<h4>LOW'+':'+''+d.low.celsius+'</h4></div>'+'<div class="col-md-6"><b>WIND'+' '+''+d.maxwind.kph+''+'KMPH</b><p>'+data.forecast.txt_forecast.forecastday[index].fcttext_metric+'</p></div></div>');;
			     
			});
		}
		
	});
	
	$.ajax({
		type: 'Get',
		url:"http://api.wunderground.com/api/6d0cbb6ac8f293bc/hourly/q/"+city+".json",
		success:function(data)
		{
			$hourly.find('tbody').html('');
			
			$(data.hourly_forecast).each(function(index, d)
			{
				$hourly.append('<tr><td>'+d.FCTTIME.weekday_name_abbrev+'</td>'+'<td>'+d.FCTTIME.civil+'</td>'+'<td><img src="'+ d.icon_url+ '"/></td>'+'<td id="temp">'+d.temp.metric+'</td>'+'<td>'+d.wdir.dir+' '+d.wspd.metric+''+'KMPH</td></tr>');
			});
		}
	});
}
