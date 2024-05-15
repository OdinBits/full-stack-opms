import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
    entry: './src/index.tsx', // Update entry file to TypeScript file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // This rule handles .ts and .tsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.svg$/, // This rule handles .svg files
                use: [
                    '@svgr/webpack', // Use SVGR/Webpack for React SVG components
                    'svg-inline-loader', // Optional: Use SVG Inline Loader to inline SVG files
                ],
            },
            {
                test: /\.css$/, // This rule handles .css files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },    
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Add TypeScript file extensions
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
};

export default config; // Export config using ES6 syntax
