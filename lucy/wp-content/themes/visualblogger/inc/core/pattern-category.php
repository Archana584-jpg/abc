<?php
/**
 * VisualBlogger: Block Patterns
 *
 * @since VisualBlogger 1.0
 */

/**
 * Registers pattern categories.
 *
 * @since VisualBlogger 1.0
 *
 * @return void
 */
function visualblogger_register_pattern_category() {

	$patterns = array();

	$block_pattern_categories = array(
		'visualblogger' => array( 'label' => __( 'VisualBlogger Theme', 'visualblogger' ) )
	);

	$block_pattern_categories = apply_filters( 'visualblogger_block_pattern_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
			register_block_pattern_category( $name, $properties );
		}
	}
}
add_action( 'init', 'visualblogger_register_pattern_category', 9 );
