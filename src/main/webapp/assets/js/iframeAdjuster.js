function adjuster(){
	var main = $(window.parent.document).find("#contentFrame");
	var thisheight = $(document).height();
	main.height(thisheight + 30);
}