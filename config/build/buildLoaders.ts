import webpack from 'webpack';

import { buildBabelLoaders } from './loaders/buildBabelLoaders';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildFileLoaders } from './loaders/buildFileLoaders';
import { buildSvgLoaders } from './loaders/buildSvgLoaders';
import { BuildOptions } from './types/config';
// import { buildTypescriptLoaders } from './loaders/buildTypescriptLoaders';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = buildSvgLoaders();

    const codeBabelLoader = buildBabelLoaders({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoaders({ ...options, isTsx: true });

    const fileLoader = buildFileLoaders();

    const cssLoaders = buildCssLoaders(isDev);

    // Если не используем typescript - нужен babel-loader
    // const typescriptLoader = buildTypescriptLoaders();

    return [
        fileLoader
        svgLoader
        tsxCodeBabelLoader,
        codeBabelLoader,
        // typescriptLoader,
        cssLoaders,
    ];
}
