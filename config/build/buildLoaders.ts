import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildSvgLoaders } from './loaders/buildSvgLoaders';
import { buildBabelLoaders } from './loaders/buildBabelLoaders';
import { buildFileLoaders } from './loaders/buildFileLoaders';
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
        fileLoader,
        svgLoader,
        tsxCodeBabelLoader,
        codeBabelLoader,
        // typescriptLoader,
        cssLoaders,
    ];
}
