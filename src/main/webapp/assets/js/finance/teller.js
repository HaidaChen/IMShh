/**
 * 
 */
$(function(){
	//switchFilterCycle();
	//loadIncomeData();
});

var switchFilterCycle = function(){
	var option = $("#option_cycle").children("li");
	var cycle = $("#filter_cycle").children("div");
	
	option.click(function(){
		var index = option.index(this);
		var current = cycle.eq(index);
		
		current.show();
		cycle.not(current).hide();
	})
}

var loadIncomeData = function(){
	var data = {
			datasets:[{
				label: '# of Votes',
				data:[50],
				backgroundColor: ['rgba(54, 162, 235, 1)']
			}],
			labels: ['订单收入']
	}
	
	var options = {
			cutoutPercentage: 60,
			tooltips: {
	            mode: 'index'
	        },
			rotation: 1
	}
	
	var ctx = $("#myChart");
	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    options: options
	});
	
}