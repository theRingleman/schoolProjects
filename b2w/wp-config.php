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
 define('AUTH_KEY',         'M|s>sC-Urxal]6i|*lEJbzWt^>ifr(dC;T(1|6G9jn3s:N!:j.>5z||d7RMg0SU1');
 define('SECURE_AUTH_KEY',  'Vd9smzcqH:|~e43}c7aXOpfIoki;wmKH;CWw;1{kc@Vx OKUK1P~7K-]]1 uL~$H');
 define('LOGGED_IN_KEY',    '=~Su*9AQ|ZOGZlb3fBx^/?m s6QJef%?X.0e0d)7]LG%B4j0[fK|X_oMAQ1F@N|7');
 define('NONCE_KEY',        'a@{`VU3TOdfb?[.+?-e-^*Pyw~pp_|]nDW?vm9+-|!T+M| )L5%mF$`+-arINOu9');
 define('AUTH_SALT',        'm]i1=r+?@,!Epvbm2(j8?FFtYm#Y%&S~]d=[+i0j_-A)mQi)w9E<xM56vAzgye`d');
 define('SECURE_AUTH_SALT', '.L]:^+m{-%!Wo*5}U35Zl1E=,=5_d74s|u~`#[-wwm4[avJoMZVuhf~A<x|%+{r`');
 define('LOGGED_IN_SALT',   '&c+cBBfyxt&#(Cnm=l&oG--.;+M`BRT>]a0Go82$<p*w#BOr+n1x^eh6)1y>*m4E');
 define('NONCE_SALT',       '|>COTNK9M+wQ[i).E*la:!)!+,)(Gia9n;ieatIC#{)>B=p!2S{9n)TsZjp#.9:(');

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
