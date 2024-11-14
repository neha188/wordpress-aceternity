// webpack.config.js
const path = require('path');

export const entry = './assets/js/index.js';
export const output = {
    filename: 'bundle.js', // The output bundled file
    path: _resolve(__dirname, 'assets/dist'), // The output directory
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'], // Use Babel to transpile JSX
                },
            },
        },
    ],
};
export const resolve = {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
        '@': _resolve(__dirname, 'src/')
    }
};
export const mode = 'production';
