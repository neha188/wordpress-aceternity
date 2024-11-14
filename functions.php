<?php
function enqueue_aeternity_ui_assets() {
    // Enqueue React (if not already included by your theme)
    wp_enqueue_script('react', 'https://unpkg.com/react@17/umd/react.production.min.js', [], null, true);
    wp_enqueue_script('react-dom', 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js', [], null, true);

    // Enqueue the Aeternity UI React Library
    wp_enqueue_script(
        'aeternity-ui-react',  // Unique handle for the script
        'https://cdn.jsdelivr.net/npm/@aeternity/ui-react@latest/dist/aeternity-ui-react.min.js', // URL to the CDN
        ['react', 'react-dom'],  // Dependencies
        null,  // Version (optional)
        true   // Load the script in the footer
    );
}

add_action('wp_enqueue_scripts', 'enqueue_aeternity_ui_assets');
