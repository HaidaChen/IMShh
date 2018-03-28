$(function(){		
	$("#invoiceform").bootstrapValidator({
		message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	invoiceDate: {
				validators: {
					notEmpty: {
	                    message: '开票日期不能为空'
	                }
				}
			},
			customerName: {
				validators: {
					notEmpty: {
	                    message: '客户名称不能为空'
	                }
				}
			},
			amountWithTax: {
				validators: {
					notEmpty: {
	                    message: '价税合计不能为空'
	                },
	                regexp:{
	                	regexp: /^\d+(?:\.\d{1,2})?$/,
	                	message: '价税合计必须为两位小数的数字'
	                }
				}
			}
        }
	});
	
	$("input[name=amountWithTax]").change(function(){calculateTax()});
});

function calculateTax(){
	var amountWithTax = $("input[name=amountWithTax]").val();
	$("input[name=valueAddTax]").val(toDecimal(amountWithTax/1.17*0.09));
	$("input[name=exciseTax]").val(toDecimal(amountWithTax/1.17*0.15));
	
	var valueAddTax = parseFloat($("input[name=valueAddTax]").val());
	var exciseTax = parseFloat($("input[name=exciseTax]").val());	
	$("input[name=constructionTax]").val(toDecimal((valueAddTax + exciseTax) * 0.07));	
	$("input[name=educationFee]").val(toDecimal((valueAddTax + exciseTax) * 0.05));
	
	var constructionTax = parseFloat($("input[name=constructionTax]").val());
	var educationFee = parseFloat($("input[name=educationFee]").val());
	$("input[name=totalTax]").val(toDecimal(valueAddTax + exciseTax + constructionTax + educationFee));
	
	$("input[name=drawback]").val(toDecimal(amountWithTax/1.17*0.28));
}

function toDecimal(x) { 
    var f = parseFloat(x); 
    if (isNaN(f)) { 
        return; 
    } 
    f = Math.round(x*100)/100; 
    return f; 
} 