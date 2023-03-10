import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildSvgLoaders } from './loaders/buildSvgLoaders';
import { buildBabelLoaders } from './loaders/buildBabelLoaders';
import { buildFileLoaders } from './loaders/buildFileLoaders';
import { buildTypescriptLoaders } from './loaders/buildTypescriptLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoaders();

    const babelLoader = buildBabelLoaders();

    const fileLoader = buildFileLoaders();

    const cssLoaders = buildCssLoaders(isDev);

    // Если не используем typescript - нужен babel-loader
    const typescriptLoader = buildTypescriptLoaders();

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoaders,
    ];
}
