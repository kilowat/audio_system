$(document).ready(function(){
	var templateNameKey = "tamplate_view";
	var listStyleClass = "list-view-style";
	var templateViewTable = '.view-table'
	var templateViewList = '.view-list';
	var selected = "view-selected";
	var viewObject = $('#catalog-view');
	var templateViewCookie = Cookies.get(templateNameKey);

	if(templateViewCookie!==null){
		clearSelect();
		$(templateViewCookie).addClass(selected);
		
		if(templateViewCookie==templateViewTable){
			viewObject.removeClass(listStyleClass);
		}
		if(templateViewCookie==templateViewList){
			viewObject.addClass(listStyleClass);
		}
	}
	
	$('.view-select.view-table').click(function(){
		Cookies.set(templateNameKey, templateViewTable);
		clearSelect();
		$(this).addClass(selected);
		viewObject.removeClass(listStyleClass);
	});
	$('.view-select.view-list').click(function(){
		
		Cookies.set(templateNameKey, templateViewList);
		clearSelect();
		$(this).addClass(selected);
		viewObject.addClass(listStyleClass);
	});

	function clearSelect(){
		var elems = $('.template-view-select .view-select');
		
		elems.each(function(key,value){
			$(value).removeClass(selected);
		});
	}

});