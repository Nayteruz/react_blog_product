export function buildSvgLoaders() {
    return {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack'],
    };
}
