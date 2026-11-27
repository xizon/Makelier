<?php
/**
 * Plugin Name: Makelier Test Block
 * Description: Gutenberg integration test for Makelier.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', function () {
    register_block_type(
        __DIR__ . '/blocks/pricing-table'
    );
});