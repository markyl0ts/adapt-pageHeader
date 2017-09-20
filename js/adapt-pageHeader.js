define([
	'coreJS/adapt'
], function(Adapt) {

	var HeaderView = Backbone.View.extend({

		_headerModel: null,

		initialize: function() {
			this._headerModel = this.model.get("_pageHeader");
			this.listenTo(Adapt, "pageView:ready", this.onPageReady);
            //Is this the best way to swap out graphics - maybe best to add both graphics on load and then toggle classes on device:changed, device:resize?
            this.listenTo(Adapt, 'device:changed', this.onPageReady);
            this.listenTo(Adapt, 'device:resize', this.onPageReady);

		},
		onPageReady: function() {
			var $headerElement = this.$el.find(".page-header");
			var options = this.model.get('_pageHeader');
            //Initially set the background graphic and height - this will be called on window resize and device
            this.setBackgroundGraphic($headerElement, options);
		},
		setBackgroundGraphic: function($headerElement, options) {
	        if (Adapt.device.screenSize === 'large') {
	            $headerElement.addClass('header-background').remove('header-background-mobile').css({'background-image': 'url('+options.src.replace('course/assets','course/en/assets')+')', 'background-color': options.backgroundColor + ' !important', 'background-repeat': options.backgroundRepeat, 'background-size': options.backgroundSize, 'background-position':options.backgroundPosition, 'min-height' : options.bannerHeight + 'px'});
	        } else {
	            $headerElement.addClass('header-background-mobile').remove('header-background').css({'background-image': 'url('+options.mobileSrc.replace('course/assets','course/en/assets')+')', 'background-color': options.backgroundColor + ' !important', 'background-repeat': options.backgroundRepeat, 'background-size': options.backgroundSize, 'background-position':options.backgroundPosition, 'min-height' : options.mobileBannerHeight + 'px'});
	        }
	    }

	});

	Adapt.on("pageView:postRender", function(view) {
		var model = view.model;
		if (model.get("_pageHeader")) {
			this._headerModel = model.get("_pageHeader");
			if (this._headerModel._isActive) {
				new HeaderView({model: model, el: view.el });
			}
		}
	});

});
