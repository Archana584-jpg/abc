<?php
 /**
  * Title: Content Grid - 2 Columns
  * Slug: visualblogger/content-grid-2-columns
  * Categories: visualblogger
  */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}},"border":{"radius":"4px"}},"backgroundColor":"background","className":"content-grid","layout":{"type":"constrained"}} -->
<div class="wp-block-group content-grid has-background-background-color has-background" style="border-radius:4px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><!-- wp:query {"queryId":27,"query":{"perPage":"12","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"flex","columns":2}} -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:post-featured-image {"isLink":true,"style":{"border":{"radius":"4px"},"spacing":{"margin":{"bottom":"0px"}}}} /-->

<!-- wp:post-title {"isLink":true,"style":{"spacing":{"margin":{"bottom":"10px"}}},"fontSize":"medium"} /-->

<!-- wp:group {"style":{"typography":{"fontSize":"13px"},"spacing":{"blockGap":"15px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="font-size:13px"><!-- wp:post-author {"showAvatar":false,"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}}} /-->

<!-- wp:post-date {"textColor":"tertiary"} /--></div>
<!-- /wp:group -->

<!-- wp:post-terms {"term":"category"} /-->

<!-- wp:post-excerpt {"fontSize":"extra-small"} /-->
<!-- /wp:post-template -->

<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"space-between"}} -->
<!-- wp:query-pagination-previous {"label":"Previous"} /-->

<!-- wp:query-pagination-numbers /-->

<!-- wp:query-pagination-next {"label":"Next"} /-->
<!-- /wp:query-pagination -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->