<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '' );

/** Database username */
define( 'DB_USER', '' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST'] );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'haZLX|35Ee p:@_f7(.VP2JWs5k&-G]*`p|J@alByZm-_%)CkPY]+G}40<b$mOlF');
define('SECURE_AUTH_KEY',  'roag-9FSddYj%vg7k/I0*}rtgk=1%$y5q*hS:YK2yr19f48uy4Fq2Oz%}|+rM)_I');
define('LOGGED_IN_KEY',    '+@LzGG#4[V<;t?^s b_I b*-N`V.3$C:r3o{+h+VG#a/^y;i.jF75a*D9)~qW:|j');
define('NONCE_KEY',        '.`W$RG;hna=D<Ce(R.O|uxeB2p&(HWWv$_ ;N2+I9z`fjS@]e!I-i+EG$exeEF,9');
define('AUTH_SALT',        '<a(FT/yaNMn%c#+fP+Zs:SqlB(F=!*LynEPo0dr%x5>&/-~Z<y^-3XC)ef-:`v^N');
define('SECURE_AUTH_SALT', 'wdx=|D!T-twm.9%q@IAyM>7RjQQWbE_[}}-au<f3C~pXkc#D+k5#$<yGK}!.Bac~');
define('LOGGED_IN_SALT',   'Q3qLbICWm&l!&S:f|Ro?}BB*${z.61MNe|t-Bys%dJ%:J{xiLyZ8:/7i{|{0<?pw');
define('NONCE_SALT',       '^&T1r8k-0}M^-4W(HkF>-9@!d<)V2FDZPv1VO3=#AI,[[DQ#f1-FCvyW.`ka3H[Y');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
