<?php
 /**
  * Title: Sidebar Content Block 1
  * Slug: visualblogger/sidebar-content-block-1
  * Categories: visualblogger
  */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"right":"20px","bottom":"20px","left":"20px","top":"20px"},"blockGap":"1rem"},"border":{"radius":"4px"}},"backgroundColor":"background","layout":{"type":"default"}} -->
<div class="wp-block-group has-background-background-color has-background" style="border-radius:4px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><!-- wp:group {"layout":{"type":"default"}} -->
<div class="wp-block-group"><!-- wp:heading {"className":"section-header","fontSize":"normal"} -->
<h2 class="section-header has-normal-font-size"><a href="#">Category Name</a></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"1.25em"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-top:1.25em"><!-- wp:query {"queryId":19,"query":{"perPage":"1","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":false,"taxQuery":null,"parents":[]},"displayLayout":{"type":"list","columns":3},"className":"post-cover"} -->
<div class="wp-block-query post-cover"><!-- wp:post-template -->
<!-- wp:post-featured-image {"isLink":true,"height":"160px","overlayColor":"foreground","dimRatio":20,"style":{"border":{"radius":"4px"}}} /-->

<!-- wp:post-title {"isLink":true,"style":{"spacing":{"margin":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}},"fontSize":"small"} /-->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"10px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-top:10px"><!-- wp:query {"queryId":24,"query":{"perPage":"4","pages":0,"offset":"1","postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":false,"taxQuery":null,"parents":[]},"className":"post-list-no-thumbnail"} -->
<div class="wp-block-query post-list-no-thumbnail"><!-- wp:post-template {"fontSize":"small"} -->
<!-- wp:post-title {"isLink":true,"style":{"typography":{"fontStyle":"normal","fontWeight":"400"}},"fontSize":"extra-small"} /-->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->