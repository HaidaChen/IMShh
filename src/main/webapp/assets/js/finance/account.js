/**
 * 
 */
$(function(){
	
	
	$("#div_add_pub").click(function(){
		$("#div_public").append(createNewCard());
	});
	
	
});

var createNewCard = function(){
	var newCard = $("<div class='col-md-3'>");
	var panel = $("<div class='panel panel-success'>");
	var panelHead = $("<div class='panel-heading'><div class='row'></div></div>");
	var bankLogo = $("<div class='col-xs-2'><i class='fa fa-image fa-2x'></i></div>");
	var cardInfo = $("<div class='col-xs-9 col-xs-offset-1'><div><input type='text'  placeholder='请输入开户行'></div><div><input type='text' placeholder='请输入卡号'></div></div>"); 
	
	var panelFooter = $("<a href='#'><div class='panel-footer'></div></a>");
	var operate = $("<span class='pull-right'><i class='glyphicon glyphicon glyphicon-ok'></i>保存</span><div class='clearfix'></div>");
	
	panelFooter.append(operate);
	panelHead.append(bankLogo);
	//panelHead.append(cardInfo);
	panel.append(panelHead);
	panel.append(panelFooter);
	newCard.append(panel);
	return newCard;
};