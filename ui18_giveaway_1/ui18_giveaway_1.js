$('ul.experts-list').on('mouseenter', 'li', function() {
	var $this = $(this);
	$this.addClass('highlight-experts');
	$this.on('mouseleave', function() {
		$this.removeClass('highlight-experts')
	});
});

$('footer').on('mouseenter', 'a', function() {
	var $this = $(this);
	$this.addClass('highlight-link');
	$this.on('mouseleave', function() {
		$this.removeClass('highlight-link')
	});
})


