<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package VisualBlogger
 */

/**
 * Add customizer default values.
 *
 * @param array $default_options
 * @return array
 */
function visualblogger_customizer_add_defaults( $default_options) {
	$defaults = array(
		// Excerpt Options
		'visualblogger_excerpt_length'    => 20,
	);


	$updated_defaults = wp_parse_args( $defaults, $default_options );

	return $updated_defaults;
}
add_filter( 'visualblogger_customizer_defaults', 'visualblogger_customizer_add_defaults' );

/**
 * Returns theme mod value saved for option merging with default option if available.
 * @since 1.0
 */
function visualblogger_gtm( $option ) {
	// Get our Customizer defaults
	$defaults = apply_filters( 'visualblogger_customizer_defaults', true );

	return isset( $defaults[ $option ] ) ? get_theme_mod( $option, $defaults[ $option ] ) : get_theme_mod( $option );
}

if ( ! function_exists( 'visualblogger_excerpt_length' ) ) :
	/**
	 * Sets the post excerpt length to n words.
	 *
	 * function tied to the excerpt_length filter hook.
	 * @uses filter excerpt_length
	 */
	function visualblogger_excerpt_length( $length ) {
		if ( is_admin() ) {
			return $length;
		}

		// Getting data from Theme Options
		$length	= visualblogger_gtm( 'visualblogger_excerpt_length' );

		return absint( $length );
	} // visualblogger_excerpt_length.
endif;
add_filter( 'excerpt_length', 'visualblogger_excerpt_length', 999 );

/*
 * Remove parentheses from categories widget
 */
function visualbloggercategories_postcount_filter ($variable) {
   $variable = str_replace('(', '<span class="post-count"> ', $variable);
   $variable = str_replace(')', ' </span>', $variable);
   return $variable;
}
add_filter('wp_list_categories','visualbloggercategories_postcount_filter');

/**
 * Customize excerpt more.
 */
if ( ! function_exists( 'visualblogger_excerpt_more' ) ) :

function visualblogger_excerpt_more( $more ) {
    if ( is_admin() ) {
        return $more;
    } else {
        return '... ';
    }
}
add_filter( 'excerpt_more', 'visualblogger_excerpt_more' );

endif;

/**
 * Customize archive title.
 */
add_filter('get_the_archive_title', function ($title) {
    if (is_category()) {
        $title = single_cat_title('', false);
    } elseif (is_tag()) {
        $title = single_tag_title('', false);
    } elseif (is_author()) {
        $title = '<span class="vcard">' . get_the_author() . '</span>';
    } elseif (is_tax()) { //for custom post types
        $title = single_term_title('', false);
    } elseif (is_post_type_archive()) {
        $title = post_type_archive_title('', false);
    }
    return $title;
});

/**
 * Search Filter 
 */
if ( ! function_exists( 'visualblogger_search_filter' ) && ( ! is_admin() ) ) :

function visualblogger_search_filter($query) {
    if ($query->is_search) {
        $query->set('post_type', 'post');
    }
    return $query;
}

add_filter('pre_get_posts','visualblogger_search_filter');

endif;

/**
 * Set the default image if none exists.
 *
 * @param string $html              The post thumbnail HTML.
 * @param int    $post_id           The post ID.
 * @param int    $post_thumbnail_id The post thumbnail ID.
 * @return html
 */
function visualblogger_fallback_post_thumbnail_html( $html, $post_id, $post_thumbnail_id ) {
    if ( empty( $html ) ) {
        $html = '<img class="default-thumbnail" src="' . get_template_directory_uri() . '/assets/img/featured_default.png' . '" alt="' . get_the_title( $post_id ) . '" />';
    }

    return $html;
}
add_filter( 'post_thumbnail_html', 'visualblogger_fallback_post_thumbnail_html', 5, 3 );

/*
 * Admin Notice
 */
function visualblogger_notice() {

    $theme = wp_get_theme();

    echo '<div class="notice notice-success is-dismissible"><p>'. esc_html('Thank you for installing the VisualBlogger theme!','visualblogger') . '</p><p><a class="button-secondary" href="' . esc_url( $theme->get( 'ThemeURI' ) ) . '" target="_blank">' . esc_html( 'Theme Demo', 'visualblogger' ) . '</a> '. '&nbsp;' . ' <a class="button-primary" href="' . esc_url( $theme->get( 'AuthorURI' ) . '/themes/visualblog-pro' ) . '" target="_blank">' . esc_html( 'Upgrade to PRO theme', 'visualblogger' ) . '</a></p></div>';

}

add_action('admin_notices', 'visualblogger_notice');