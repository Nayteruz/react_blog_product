export function buildTypescriptLoaders() {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
}
