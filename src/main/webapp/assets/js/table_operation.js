/**
 * 实现表格数据的查询、删除、编辑、导入、导出操作
 */
var DataOperation = function(){
	var operation = new Object();
	
	/*
	 * option参数为json对象，分别是每种操作的触发元素，和对应的服务端url*
	 * 格式：{importElement: importBtn, importUrl: xxx, ...}
	 * */
	
	operation.init = function(table, option){
		option.queryElement.click(function(){
			table.bootstrapTable('refresh', {data: option.queryUrl, cache: false});
		});
		
		option.importElement.click(function(){
			var oImportModal = new ImportModal(option.importUrl, function(tab, refreshUrl){
        		tab.bootstrapTable('refresh', {data: refreshUrl, cache: false});
        	}, table, option.queryUrl);
			oImportModal.createModal();    	
        });
		
		option.addElement.click(function(){
			$(window.parent.document).find("#contentFrame").attr("src", option.addUrl);
		});
		
		option.updateElement.click(function(){
			var selections = table.bootstrapTable('getSelections');
        	if (selections.length == 0){
        		alert("请选择需要修改的数据");
        		return;
        	}
        	if (selections.length > 1){
        		alert("一次只能够修改一条数据");
        		return;
        	}
        	var id = selections[0].id;
        	$(window.parent.document).find("#contentFrame").attr("src", option.updateUrl + id);
		});
		
		option.deleteElement.click(function(){		
			var selections = table.bootstrapTable('getSelections');
        	if (selections.length == 0){
        		alert("请选择需要删除的数据");
        		return;
        	}
        	if (selections.length > 1){
        		alert("一次只能够删除一条数据");
        		return;
        	}
        	
        	if (!confirm("确认要删除该记录吗")) {
                return;
            }
        	var id = selections[0].id;
        	$.ajax({
    			type: 'POST',
    			url: option.deleteUrl + id,
    			success: function(result){
    				table.bootstrapTable('refresh', {data: option.queryUrl, cache: false});
    			}
    		});
		});
		
		option.exportElement.click(function(){
			
		});
		
		
	}
	
	return operation;
}
