$(function(){	
	$("input[name=quantity],[name=unitPrice]").change(function(){
		calTotlemnt();
		calBalance();
	});
	$("input[name=totlemnt],[name=paid]").change(function(){
		calBalance();
	});
	$("#purchaseform").bootstrapValidator({
		message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	purchaseDate: {
				validators: {
					notEmpty: {
	                    message: '采购日期不能为空'
	                }
				}
			},
			materialName: {
				validators: {
					notEmpty: {
	                    message: '原材料不能为空'
	                }
				}
			},
			quantity: {
				validators: {
					notEmpty: {
	                    message: '数量不能为空'
	                },
	                numeric:{
	                	message: '数量必须为数字'
	                }
				}
			},
			unitPrice: {
				validators: {
					notEmpty: {
	                    message: '单价不能为空'
	                },
	                numeric:{
	                	message: '单价必须为数字'
	                }
				}
			},
			totlemnt: {
				validators: {
					notEmpty: {
	                    message: '金额不能为空'
	                }
				}
			},
			paid: {
				validators: {
					notEmpty: {
	                    message: '已付款不能为空'
	                },
	                numeric:{
	                	message: '已付款必须为数字'
	                }
				}
			},
			balance: {
				validators: {
					notEmpty: {
	                    message: '余额不能为空'
	                }
				}
			}
        }
	});
	
});

function calTotlemnt(){
	if ($("input[name=quantity]").val() != "" && $("input[name=unitPrice]").val() != ""){
		$("input[name=totlemnt]").val($("input[name=quantity]").val() * $("input[name=unitPrice]").val());
	}
}

function calBalance(){
	if ($("input[name=totlemnt]").val() != "" && $("input[name=paid]").val() != ""){
		$("input[name=balance]").val($("input[name=totlemnt]").val() - $("input[name=paid]").val());
	}
}