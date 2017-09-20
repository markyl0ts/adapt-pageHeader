# adapt-pageHeader
Adds the option of implementing a background graphic or colour to a header element.

The graphic defaults to a fullscreen 'cover' to act as a banner.

You can set the min-height of this block to achieve the banner height you require. 

You can also set the 'background-size' and 'background-position' to allow different effects.  

NB: the background height will grow with the height of the components added to the header elememnt.

Usage
 ------
 
 ##Settings overview

Extends View

####_pageHeader

Page Header options object


####_pageHeader.src

This is the background image source used when page is viewed at desktop resolution

####_pageHeader.mobileSrc

This is the background image source used when page is viewed at mobile resolution

####_pageHeader.bannerHeight

This is the min-height of the header element when the page is viewed at desktop resolution

####_pageHeader.mobileBannerHeight
This is the min-height of the header element when the page is viewed at mobile resolution

####_pageHeader.backgroundSize

This is mapped to the background-size css attribute. Options are "cover", "auto" or "contain"

####_pageHeader.backgroundPosition

This is mapped to the background-position css attribute.  Options are "left","right","center","top","bottom".

####_pageHeader.backgroundRepeat

This is mapped to the background-repeat css attribute.  Options are "repeat","repeat-x","repeat-y","no-repeat".

####_pageHeader.backgroundColor

This is mapped to the background-color css attribute.

##Limitations

Background-position is limited to preset pairs of "left", "center", "right", "top", "bottom"

Background-size is limied to "cover","auto","contain".

##Browser spec

To Be Completed

Thanks to adapt-block-background, i based this implementation to that extension.
https://github.com/davegosling/adapt-block-background
