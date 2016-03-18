<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bootstrap2wordpress');

/** MySQL database username */
define('DB_USER', 'bootman');

/** MySQL database password */
define('DB_PASSWORD', 'xeqqHEd9KSUvv5jF');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
 define('AUTH_KEY',         'Euv2POW?gP!Z1Q#k]ykFnaev[EYhzf 0=)*B^%fTJ{+,b<?~+yi@MGpa{.+gm/{%');
 define('SECURE_AUTH_KEY',  '?<v).$UGYRss&{[GF;ie p;FU~)kR}E}xv-0Ml-0sNz?#(~:3/=*{gc}+-u_ks#X');
 define('LOGGED_IN_KEY',    'Wh>J*j5ap]]=T^oRe*z-.%uyy<@EcMVQS18zLU4j(GPPPdC:33D KZ`B+oPhTX>c');
 define('NONCE_KEY',        'C.,$9DS/EVX.~}&+?vz7m#M3 UDvf.R^VM,wjbau{xz@RHa<=*hUO<>t7Sgj??b4');
 define('AUTH_SALT',        'gEM1~af<k{Gce+]C;D[1+1K(^p+5<!tISI}  W,5c0vid|!?#TJ3GL0tY#^}wqp$');
 define('SECURE_AUTH_SALT', 'XizehxMIx|/EB,w&mkR^t;z#7<6mS5ceR-E=3WXj3F.D%Xq3-?Q|r41^mm;qXKG}');
 define('LOGGED_IN_SALT',   'NlLqxpl|`xH 6sWB7e8c8P $ESamn[H5%rOHSIp~VruxqA^>5!PP,uZRI1vxnoWn');
 define('NONCE_SALT',       'wguhQ3$z;VRL]54LAK%kjZ Bv~~K0C|Q/bnkr]{d6[>e-VH5%M;Yz$=e~gpJHa0<');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'dbbs_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
