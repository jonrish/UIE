(function() {
	var experts = new HighlightClass($('ul.experts-list'), 'li', 'highlight-experts');
	var link = new HighlightClass($('footer'), 'a', 'highlight-link');
})();

function HighlightClass(parent_element, target_element, target_class) {
	$(parent_element).on('mouseenter', target_element, function() {
		var $this = $(this);
		$this.addClass(target_class);
		$this.on('mouseleave', function() {
			$this.removeClass(target_class);
		});
	});
};
