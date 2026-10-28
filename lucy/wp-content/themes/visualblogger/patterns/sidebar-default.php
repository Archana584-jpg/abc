<?php
 /**
  * Title: Sidebar Default
  * Slug: visualblogger/sidebar-default
  * Categories: visualblogger
  */
?>

<!-- wp:group {"style":{"spacing":{"blockGap":"0.7rem"}},"layout":{"type":"constrained"},"className":"sidebar"} -->
<div class="wp-block-group"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:image {"id":140,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"4px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="<?php echo esc_url(get_template_directory_uri()) . '/assets/img/300x250.png'; ?>" alt="" class="wp-image-140" style="border-radius:4px"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}},"border":{"radius":"4px"}},"backgroundColor":"background","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background-background-color has-background" style="border-radius:4px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><!-- wp:heading {"level":3,"className":"section-header","fontSize":"normal"} -->
<h3 class="section-header has-normal-font-size"><strong>Follow Us</strong></h3>
<!-- /wp:heading -->

<!-- wp:social-links {"showLabels":true,"style":{"spacing":{"blockGap":{"top":"10px","left":"10px"},"margin":{"top":"1rem"}}},"className":"is-style-logos-only","layout":{"type":"flex","justifyContent":"space-between"}} -->
<ul class="wp-block-social-links has-visible-labels is-style-logos-only" style="margin-top:1rem"><!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"youtube"} /-->

<!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"instagram"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /-->

<!-- wp:social-link {"url":"#","service":"dribbble"} /--></ul>
<!-- /wp:social-links --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"blockGap":"1.5rem","padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}},"border":{"radius":"4px"}},"backgroundColor":"background","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background-background-color has-background" style="border-radius:4px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><!-- wp:heading {"level":3,"className":"section-header","fontSize":"normal"} -->
<h3 class="section-header has-normal-font-size"><strong>Recent Posts</strong></h3>
<!-- /wp:heading -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"1em"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-top:1em"><!-- wp:latest-posts {"displayPostDate":true,"displayFeaturedImage":true,"featuredImageAlign":"left","featuredImageSizeWidth":80,"featuredImageSizeHeight":80,"addLinkToFeaturedImage":true,"style":{"typography":{"lineHeight":"1.3"}},"fontSize":"tiny"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"blockGap":"1.5rem","padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}},"border":{"radius":"4px"}},"backgroundColor":"background","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background-background-color has-background" style="border-radius:4px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><!-- wp:heading {"level":3,"className":"section-header","fontSize":"normal"} -->
<h3 class="section-header has-normal-font-size"><strong>Categories</strong></h3>
<!-- /wp:heading -->

<!-- wp:categories {"showPostCounts":true,"showOnlyTopLevel":true,"style":{"spacing":{"margin":{"top":"1em"}}}} /--></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"blockGap":"1.5rem","padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}},"border":{"radius":"4px"}},"backgroundColor":"background","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background-background-color has-background" style="border-radius:4px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><!-- wp:heading {"level":3,"className":"section-header","fontSize":"normal"} -->
<h3 class="section-header has-normal-font-size"><strong>Tags</strong></h3>
<!-- /wp:heading -->

<!-- wp:tag-cloud {"numberOfTags":30,"smallestFontSize":"12px","largestFontSize":"12px","className":"is-style-default","style":{"spacing":{"margin":{"top":"1em"}}}} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
