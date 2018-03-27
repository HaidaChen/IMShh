/**
 * 
 */
$(function(){	
	
	$("#div_add_pub").click(function(){
		$("#div_public").append(createNewCard("div_public"));
	});
	
	selectModel();
});

var createNewCard = function(){
	var newCard = $("<div class='col-md-3'>");
	var panel = $("<div class='panel panel-default'>");
	var panelHead = $("<div class='panel-heading'></div>");
	var headRow = $("<div class='row'></div>");
	var bankLogo = $("<div class='col-xs-2'></div>");
	var defaultLogo = $("<i class='fa fa-image fa-2x'></i>");
	var logoMenuStr = "<div class='model-select-box'><ul><li data-option='gongshang'>工商银行<li>";
	logoMenuStr += "<li data-option='nongye'>农业银行<li>";
	logoMenuStr += "<li data-option='jianshe'>建设银行<li>";
	logoMenuStr += "<li data-option='zhongguo'>中国银行<li>";
	logoMenuStr += "<li data-option='jiaotong'>交通银行<li>";
	logoMenuStr += "<li data-option='zhaoshang'>招商银行<li>";
	logoMenuStr += "<li data-option='pingan'>平安银行<li>";
	logoMenuStr += "<li data-option='minsheng'>民生银行<li>";
	logoMenuStr += "<li data-option='zhongxin'>中信银行<li>";
	logoMenuStr += "<li data-option='xingye'>兴业银行<li>";	
	logoMenuStr += "<li data-option='pufa'>浦发银行<li>";
	logoMenuStr += "<li data-option='guangda'>光大银行<li>";
	logoMenuStr += "<li data-option='hengfeng'>恒丰银行<li>";
	logoMenuStr += "<li data-option='xinyongshe'>湖南农村信用社<li>";
	logoMenuStr += "</ul></div>";
	var logoMenu = $(logoMenuStr);
	var cardInfo = $("<div class='col-xs-10'></div>"); 
	var cardBank = $("<div><input type='text' name='bank' class='form-control' placeholder='请输入开户行' required='required'></div>");
	var cardBrachBank = $("<div><input type='text' name='brachBank' class='form-control' placeholder='请输入支行'></div>");
	var cardNo = $("<div><input type='text' name='cardNo' class='form-control' placeholder='请输入卡号' required='required'></div>");
	var cardUser = $("<div><input type='text' name='cardUser' class='form-control' placeholder='请输入用户名' required='required'></div>");
	var panelFooter = $("<div class='panel-footer'></div>");
	var operate = $("<span class='pull-right' style='cursor:pointer' onclick='removeNewCard(this)'><i class='glyphicon glyphicon-remove'></i>取消</span> <span class='pull-right' style='cursor:pointer' onclick='saveCard(this)'><i class='glyphicon glyphicon glyphicon-ok'></i>保存</span><div class='clearfix'></div>");
	
	newCard.append(panel);
	panel.append(panelHead);
	panel.append(panelFooter);
	panelHead.append(headRow);
	headRow.append(bankLogo);
	headRow.append(cardInfo);
	cardInfo.append(cardBank);
	cardInfo.append(cardBrachBank);
	cardInfo.append(cardNo);
	cardInfo.append(cardUser);
	bankLogo.append(defaultLogo);
	bankLogo.append(logoMenu);
	panelFooter.append(operate);	
	
	return newCard;
};

var addLogo = function(obj){
	
}

var saveCard = function(obj){
	var card = $(obj).parents("div[class=col-md-3]");
	var panel = card.children();
	var panelCardInfo = card.find("div[class=col-xs-10]");
	var cardBank = panelCardInfo.find("input[name=bank]").val();
	var brachBank = panelCardInfo.find("input[name=brachBank]").val();
	var cardNo = panelCardInfo.find("input[name=cardNo]").val();
	var cardUser = panelCardInfo.find("input[name=cardUser]").val();
	if ($.trim(cardBank) == ''){
		alert("开户行信息不能为空");
		panelCardInfo.find("input[name=bank]").focus();
		return;
	}
	
	if ($.trim(cardNo) == ''){
		alert("卡号不能为空");
		panelCardInfo.find("input[name=cardNo]").focus();
		return;
	}
	
	if ($.trim(cardUser) == ''){
		alert("银行卡用户不能为空");
		panelCardInfo.find("input[name=cardUser]").focus();
		return;
	}
	
	var cardNoMask = cardNo.substr(0, 4) + " **** " + cardNo.substr(cardNo.length - 4);
		
	panel.attr("class", "panel panel-success");
	panelCardInfo.attr("class", "col-xs-9 col-xs-offset-1");
	
	panelCardInfo.html("<div class='lager'>" + cardBank + "</div><div>" + cardNoMask + "</div>");
	
}

var removeNewCard = function(obj){
	$(obj).parents("div[class=col-md-3]").remove();
}

var selectModel = function(){
    var $box = $('div.model-select-box');
    var $option = $('ul.model-select-option', $box);
    var $txt = $('div.model-select-text', $box);
    var speed = 10;
    /*
     * 单击某个下拉列表时，显示当前下拉列表的下拉列表框
     * 并隐藏页面中其他下拉列表
     */
    $txt.click(function(e) {
            $option.not($(this).siblings('ul.model-select-option')).slideUp(speed, function(){
                int($(this));
            });
            $(this).siblings('ul.model-select-option').slideToggle(speed, function(){
                int($(this));
            });
            return false;
        });
    //点击选择，关闭其他下拉
    /*
     * 为每个下拉列表框中的选项设置默认选中标识 data-selected
     * 点击下拉列表框中的选项时，将选项的 data-option 属性的属性值赋给下拉列表的 data-value 属性，并改变默认选中标识 data-selected
     * 为选项添加 mouseover 事件
     */
    $option.find('li').each(function(index, element) {
            if($(this).hasClass('seleced')){
                $(this).addClass('data-selected');
            }
        })
        .mousedown(function(){
            $(this).parent().siblings('div.model-select-text').text($(this).text())
                .attr('data-value', $(this).attr('data-option'));
            
            $option.slideUp(speed, function(){
                int($(this));
            });
            $(this).addClass('seleced data-selected').siblings('li').removeClass('seleced data-selected');
            return false;
        })
        .mouseover(function(){
            $(this).addClass('seleced').siblings('li').removeClass('seleced');
        });
    //点击文档，隐藏所有下拉
    $(document).click(function(e) {
        $option.slideUp(speed, function(){
            int($(this));
        });
    });
    //初始化默认选择
    function int(obj){
        obj.find('li.data-selected').addClass('seleced').siblings('li').removeClass('seleced');
    }
}