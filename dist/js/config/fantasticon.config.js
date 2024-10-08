"use strict";
// ============================================================================
// Import
// ============================================================================
Object.defineProperty(exports, "__esModule", { value: true });
const fantasticon_1 = require("fantasticon");
// ============================================================================
// Constants
// ============================================================================
// Configuration for the Fantasticon tool to generate icon fonts from SVG files.
const fantasticonConfig = {
    // RunnerOptionalOptions
    // inputDir: sourceDirectory, // (required)
    // outputDir: outputDiectory, // (required)
    // Basic naming and type setup for font generation
    // ------------------------------------------------------------------------
    name: "icon",
    fontTypes: [
        fantasticon_1.FontAssetType.TTF, // TTF = "ttf"
        fantasticon_1.FontAssetType.WOFF, // WOFF = "woff"
        fantasticon_1.FontAssetType.WOFF2, // WOFF2 = "woff2"
        fantasticon_1.FontAssetType.EOT, // EOT = "eot"
        fantasticon_1.FontAssetType.SVG, // SVG = "svg"
    ],
    assetTypes: [
        fantasticon_1.OtherAssetType.CSS, // CSS = "css",
        fantasticon_1.OtherAssetType.SCSS, // SCSS = "scss",
        fantasticon_1.OtherAssetType.SASS, // SASS = "sass",
        fantasticon_1.OtherAssetType.HTML, // HTML = "html",
        fantasticon_1.OtherAssetType.JSON, // JSON = "json",
        fantasticon_1.OtherAssetType.TS, // TS = "ts"    
    ],
    formatOptions: {
        // woff: {
        // //   // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
        // //   metadata: "..."
        // // },
        // // ttf?: TtfOptions; // type TtfOptions = svg2ttf.FontOptions;
        // // svg?: SvgOptions;  // type SvgOptions = Omit<SvgIcons2FontOptions, "fontName" | "fontHeight" | "descent" | "normalize">;
        json: { indent: 4 },
        ts: {
            // select what kind of types you want to generate
            // (default `["enum", "constant", "literalId", "literalKey"]`)
            // render the types with `"` instead of `"` (default is `"`)
            singleQuotes: false,
            enumName: "icon_gl",
            // customise names used for the generated types and constants
            constantName: "MY_CODEPOINTS"
            // literalIdName: "IconId",
        }
    },
    pathOptions: {
        json: "./dist/font/icon.gl.json",
        css: "./dist/font/icon.gl.css",
        scss: "./dist/font/icon.gl.scss",
        woff: "./dist/font/icon.gl.woff",
        woff2: "./dist/font/icon.gl.woff2",
    },
    codepoints: {
        "chevron-left": 57344, // decimal representation of 0xe000
        "chevron-right": 57345,
        "thumbs-up": 57358,
        "thumbs-down": 57359,
    },
    // fontHeight: number;
    // descent: number;
    // normalize: boolean;
    // round: number;
    selector: ".i",
    // tag: string;
    // Use our custom Handlebars templates
    // templates: {
    //     css: "./build/font/icon.gl.css.hbs",
    //     scss: "./build/font/icon.gl.scss.hbs"
    // }, 
    prefix: "icon",
    fontsUrl: "./fonts",
    // Customize generated icon IDs (unavailable with `.json` config file)
    // getIconId: ({
    //     basename, // `string` - Example: "foo";
    //     relativeDirPath, // `string` - Example: "sub/dir/foo.svg"
    //     absoluteFilePath, // `string` - Example: "/var/icons/sub/dir/foo.svg"
    //     relativeFilePath, // `string` - Example: "foo.svg"
    //     index // `number` - Example: `0`
    // }) => [index, basename].join("_") // "0_foo"
};
// ============================================================================
// Export
// ============================================================================
exports.default = fantasticonConfig;
