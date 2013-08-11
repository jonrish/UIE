$('ul.experts-list').on('mouseenter', 'li', function() {
	var $this = $(this);
	$this.addClass('highlight-experts');
	$this.on('mouseleave', function() {
		$this.removeClass('highlight-experts')
	});
});
