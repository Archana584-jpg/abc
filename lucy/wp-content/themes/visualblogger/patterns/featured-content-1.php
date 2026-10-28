<?php
 /**
  * Title: Featured Content 1
  * Slug: visualblogger/featured-content-1
  * Categories: visualblogger
  */
?>

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"0.7rem"}}},"className":"featured-content featured-content-2","layout":{"type":"constrained","contentSize":"1120px"}} -->
<div class="wp-block-group featured-content featured-content-2" style="margin-bottom:0.7rem"><!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"0.7rem","left":"0.7rem"}}}} -->
<div class="wp-block-columns"><!-- wp:column {"width":"50%"} -->
<div class="wp-block-column" style="flex-basis:50%"><!-- wp:group {"className":"featured-slider","layout":{"type":"constrained"}} -->
<div class="wp-block-group featured-slider"><!-- wp:query {"queryId":22,"query":{"perPage":"3","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":false},"displayLayout":{"type":"list","columns":3},"className":"owl-carousel owl-theme","layout":{"type":"default"}} -->
<div class="wp-block-query owl-carousel owl-theme"><!-- wp:post-template {"className":"featured-large"} -->
<!-- wp:post-featured-image {"isLink":true,"height":"352px","overlayColor":"foreground","dimRatio":20,"style":{"border":{"radius":"4px"}}} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"className":"entry-header","layout":{"type":"constrained"}} -->
<div class="wp-block-group entry-header"><!-- wp:post-terms {"term":"category","separator":""} /-->

<!-- wp:post-title {"isLink":true,"fontSize":"big"} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"50%","style":{"spacing":{"blockGap":"0.7rem"}},"layout":{"type":"default"}} -->
<div class="wp-block-column" style="flex-basis:50%"><!-- wp:query {"queryId":2,"query":{"perPage":"4","pages":0,"offset":"3","postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":false},"displayLayout":{"type":"flex","columns":2},"className":"featured-small"} -->
<div class="wp-block-query featured-small"><!-- wp:post-template -->
<!-- wp:post-featured-image {"isLink":true,"height":"170px","overlayColor":"foreground","dimRatio":20,"style":{"border":{"radius":"4px"}}} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"className":"entry-header","layout":{"type":"constrained"}} -->
<div class="wp-block-group entry-header"><!-- wp:post-terms {"term":"category","separator":""} /-->

<!-- wp:post-title {"isLink":true,"fontSize":"normal"} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->