/**
 * 
 */
$(function(){
	$("#btn_save").click(function(){
        $("#formRole").submit();        
	});
	
	$("#btn_delete").click(function(){		
		var roleId = $("#select_role").val();
		if(roleId == ""){
			alert("请选择要删除的角色");
			return;
		}
		
		if (!confirm("确认要删除该角色吗")) {
            return;
        }
		
		$.ajax({
			type: "POST",
			url: "delete.do?id="+roleId,
			success: function(result){
				$("#select_role option[value='" + roleId + "']").remove()
			}
		});
	});
	
	$("#select_role").change(function(){
		var remark = $(this).find("option:selected").attr("remark");
		$("#remark").text(remark);
		loadAuTree($(this).val());
		$("#sideAuthority").show();
	});
	
	$("#btn_save_authortiy").click(function(){
		var roleId = $("#select_role").val();
		var url = "saveAuthority.do?roleId="+roleId+"&authorityIds="+ids;
		$.ajax({"url": url, success: function(){
			alert("角色权限保存成功");
		}});
	});
});

var ids = [];
function loadAuTree(roleId){
	ids = [];
	var tree = $('#authorityTree');
	tree.data('jstree', false).empty();
	tree.jstree({
	    'core' : {
	      'data' : {
	        "url" : "allAuthority.do?roleId="+roleId,
	        "dataType" : "json"
	      }
	    },
	    "plugins" : ["checkbox" ]
	});	
	
	tree.on('changed.jstree', function (e, data){
		 ids = data.selected;
	 });
}
