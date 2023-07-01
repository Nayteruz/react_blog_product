export function buildFileLoaders() {
    return {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        exclude: /node_modules/,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
}
