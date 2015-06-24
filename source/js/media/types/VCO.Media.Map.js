/*  VCO.Media.Map
================================================== */

VCO.Media.Map = VCO.Media.extend({
	includes: [VCO.Events],

	_API_KEY: "AIzaSyB9dW8e_iRrATFa8g24qB6BDBGdkrLDZYI",
	/*  Load the media
	================================================== */
	_loadMedia: function() {

		// Loading Message
		this.loadingMessage();

		// Create Dom element
		this._el.content_item   = VCO.Dom.create("div", "vco-media-item vco-media-map vco-media-shadow", this._el.content);

		// Get Media ID
		this.media_id = this.data.url;

		// API Call
		this.mapframe = VCO.Dom.create("iframe", "", this._el.content_item);
		window.stash = this;
		this.mapframe.width       = "100%";
		this.mapframe.height      = "100%";
		this.mapframe.frameBorder = "0";
		this.mapframe.src         = VCO.Util.makeGoogleMapsEmbedURL(this.media_id, this.options.api_key_googlemaps);
		
		// After Loaded
		this.onLoaded();
	},

	_updateMediaDisplay: function() {
		if (this._state.loaded) {
			var dimensions = VCO.Util.ratio.square({w:this._el.content_item.offsetWidth});
			this._el.content_item.style.height = dimensions.h + "px";
		}
	}
});
