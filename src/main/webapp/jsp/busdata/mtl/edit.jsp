<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Customer Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/vendors/datapicker/bootstrap-datepicker.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="custform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${mtl.id }">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">原材料信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">品名</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="name" value="${mtl.name }" placeholder="请输入原材料品名" required="required">
                </div>
                
                <label for="phone" class="col-sm-2 control-label">规格</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="specification" value="${mtl.specification }" placeholder="请输入规格">
                </div>
              </div>              
              
              
              <div class="form-group">                
                <label for="email" class="col-sm-2 control-label">单位</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="unit" value="${mtl.unit }" placeholder="请输入单位">
                </div>
                <label for="email" class="col-sm-2 control-label">种类</label>
                <div class="col-sm-4">
                    <select name="category" class="form-control">
                        <option value="">----请选择原材料种类----</option>
                        <option value="木方">木方</option>
                        <option value="纸箱">纸箱</option>
                        <option value="其他">其他</option>                        
                    </select>
                </div>
              </div>
              
              
              
              <div class="form-group">                
                  <label for="remark" class="col-sm-2 control-label">备注</label>
                  <div class="col-sm-10">
                    <textarea class="form-control" name="remark" placeholder="备注" rows="3">${mtl.remark }</textarea>
                  </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button id="btn_save" type="submit" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-check"></span>保存
              </button> 
              <button type="button" class="btn btn-default btn-sm" onclick="history.back(-1)">
                <span class="glyphicon glyphicon-share"></span>关闭
              </button>
            </div>
        </form>  
    </div>
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrapvalidator/js/bootstrapValidator.min.js"></script>
    <script src="<%=basePath %>vendors/datepicker/bootstrap-datepicker.js"></script>
    <script src="<%=basePath %>assets/js/selfAdaption.js"></script>
    <script>
    $(function(){
        if ($('#id').val() != ''){  
            var category = "${mtl.category}";            
            $("select").val(category);
        }
    });
    </script>
</body>
</html>