<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>deliver Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/vendors/bootstrap-table/bootstrap-table.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
    	<div class="row vertical-spacing">
	    	<div class="well title">原材料接收明细</div>
	    </div>
	    <div id="toolbar" class="row vertical-spacing">
	    	<div class="col-sm-4 col-sm-offset-8 pull-right">
	    		<div class="input-group "  id="block_search">
		    	    <input type="text" id="txt_search" name="condition" class="form-control" placeholder="采购计划编号">
		    	    <span class="input-group-addon" id="span_search">
		    	        <i class="glyphicon glyphicon-search"></i>
		    	    </span>
		    	    <span class="input-group-addon" id="span_search_more" data-toggle="modal" data-target="#grandQueryModal">
		    	        <i class="glyphicon glyphicon-zoom-in"></i>
		    	    </span>
		    	    <span></span>
		    	    <span class="input-group-addon" id="span_search_more">
		    	        <div class="dropdown">
						  <i class="glyphicon glyphicon-list dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></i>
						  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <li id="li_opt_deliver"><a href="#" onclick="viewPurchasePlan()">采购计划</a></li>
						    <li id="li_opt_payment"><a href="#">付款明细</a></li>						    
						  </ul>
						</div>
		    	    </span>
		    	    
		    	</div>
	    	</div>
	    	
		</div>  
    	<div class="row vertical-spacing">
	    	<table id="tb_deliver" ></table>
	    </div>
    </div>
    
    <div class="modal fade" id="grandQueryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  
	    <div class="modal-dialog" role="document">  
	        <div class="modal-content">  
	            <div class="modal-header">  
	                <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
	                    <span aria-hidden="true">×</span>  
	                </button>  
	                <h4 class="modal-title" id="myModalLabel">查询条件</h4>  
	            </div>  
	            <div class="modal-body">  
	                <form id="formSearch" class="form-horizontal">
	                    <div class="form-group" style="margin-top:15px">
	                        <label class="control-label col-sm-3" for="txt_search_planIdentify">采购计划编号</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control" id="txt_search_planIdentify" name="planIdentify">
	                        </div>	                                                
	                    </div>
	                    <div class="form-group" style="margin-top:15px">
 							<label class="control-label col-sm-3" for="txt_search_supplierName">供应商</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control" id="txt_search_supplierName" name="supplierName">
	                        </div>
	                    </div>
	                    	                    
	                    <div class="form-group" style="margin-top:15px">
	                    	<label class="control-label col-sm-3" for="txt_search_startDate">开始日期</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control selectData" id="txt_search_startDate" name="startDate">
	                        </div>
	                    </div>
	                    <div class="form-group" style="margin-top:15px">
	                    	<label class="control-label col-sm-3" for="txt_search_endDate">结束日期</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control selectData" id="txt_search_endDate" name="endDate">
	                        </div> 
	                    </div>
	                </form>  
	            </div>  
	            <div class="modal-footer">  
	                
	                <button id="btn_grade_query" type="button" class="btn btn-primary">查询</button>  
	                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>  
	            </div>  
	        </div>  
	    </div> 
	    	    
	</div>  
    
    
    
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/bootstrap-table.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/local/bootstrap-table-zh-CN.js"></script>

    <script src="<%=basePath %>vendors/datepicker/bootstrap-datepicker.js"></script>
    <script src="<%=basePath %>assets/js/ins_datepicker.js"></script>
    <script src="<%=basePath %>assets/js/importModal.js"></script>
    <script src="<%=basePath %>assets/js/iframeAdjuster.js"></script>
    <script src="<%=basePath %>assets/js/table_operation.js"></script>
    <script src="<%=basePath %>assets/js/finance/purchase_deliver.js"></script>
</body>
</html>