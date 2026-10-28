<?php
/**
 * Block Styles
 */

if ( function_exists( 'register_block_style' ) ) {
	/**
	 * Register block styles.
	 */
	function visualblogger_register_block_styles() {
		// Image: Borders.
		register_block_style(
			'core/image',
			array(
				'name'  => 'visualblogger-border',
				'label' => esc_html__( 'Borders', 'visualblogger' ),
			)
		);
	}
	add_action( 'init', 'visualblogger_register_block_styles' );
}
