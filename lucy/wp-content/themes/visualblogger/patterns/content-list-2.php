<?php
 /**
  * Title: Content List 2
  * Slug: visualblogger/content-list-2
  * Categories: visualblogger
  */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}},"border":{"radius":"4px"}},"backgroundColor":"background","className":"content-list content-list-2","layout":{"type":"constrained"}} -->
<div class="wp-block-group content-list content-list-2 has-background-background-color has-background" style="border-radius:4px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><!-- wp:query {"queryId":27,"query":{"perPage":"10","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false}} -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:post-featured-image {"isLink":true,"width":"210px","height":"210px","style":{"border":{"radius":"4px"},"spacing":{"margin":{"right":"1.25rem","top":"0px","bottom":"0px","left":"0px"}}}} /-->

<!-- wp:post-terms {"term":"category"} /-->

<!-- wp:post-title {"isLink":true,"style":{"spacing":{"margin":{"bottom":"10px","top":"10px"}}},"fontSize":"big"} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"15px"},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="font-size:13px"><!-- wp:post-author {"showAvatar":false,"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}}} /-->

<!-- wp:post-date {"textColor":"tertiary"} /--></div>
<!-- /wp:group -->

<!-- wp:post-excerpt /-->
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