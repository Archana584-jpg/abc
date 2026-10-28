<?php
 /**
  * Title: Content Grid - 4 Columns (Boxed)
  * Slug: visualblogger/content-grid-4-columns-boxed
  * Categories: visualblogger
  */
?>

<!-- wp:group {"style":{"border":{"radius":"4px"},"spacing":{"blockGap":"0","padding":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"margin":{"top":"0px"}}},"className":"content-grid content-grid-2","layout":{"type":"constrained"}} -->
<div class="wp-block-group content-grid content-grid-2" style="border-radius:4px;margin-top:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:query {"queryId":27,"query":{"perPage":"12","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"flex","columns":4}} -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:post-featured-image {"isLink":true,"style":{"border":{"radius":{"topLeft":"4px","topRight":"4px","bottomLeft":"0px","bottomRight":"0px"}},"spacing":{"margin":{"bottom":"0px"}}}} /-->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"},"blockGap":"0px"},"border":{"radius":{"bottomLeft":"4px","bottomRight":"4px"}}},"backgroundColor":"background","className":"entry-header","layout":{"type":"constrained"}} -->
<div class="wp-block-group entry-header has-background-background-color has-background" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><!-- wp:post-title {"isLink":true,"style":{"spacing":{"margin":{"bottom":"10px"}}},"fontSize":"medium"} /-->

<!-- wp:post-terms {"term":"category"} /-->

<!-- wp:post-date {"style":{"typography":{"fontSize":"13px"}},"textColor":"tertiary"} /-->

<!-- wp:post-excerpt {"fontSize":"extra-small"} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-pagination {"className":"pagination-style-2","layout":{"type":"flex","justifyContent":"space-between"}} -->
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