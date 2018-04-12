$(function(){	
	$("#btn_save").click(function(){
        $("#deliverform").ajaxSubmit(function(result){
        	 alert("原材料接收成功"); 
        	 var tr = $("#"+result.planId).find("tr[data-uniqueid="+result.planDetailId+"]")
        	 var val = tr.children("td").eq(7).html();
        	 var newval = parseInt(val) + result.amount;
        	 tr.children("td").eq(7).html(newval);
        });
        
	});
	
});

