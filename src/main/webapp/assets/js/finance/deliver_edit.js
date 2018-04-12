$(function(){	
	$("#btn_save").click(function(){
        $("#deliverform").ajaxSubmit(function(result){
        	 alert("原材料接收成功");        	 
        });
	});
	
});

