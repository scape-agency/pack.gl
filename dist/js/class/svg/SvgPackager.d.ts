/**
 * Provides functionality to optimize and package SVG files into various
 * formats. It reads SVG files from a specified directory, optimizes them
 * using SVGO, and then outputs them as TypeScript files and JSON indexes.
 */
declare class SvgPackager {
    private svgoConfigPath;
    /**
     * Constructor for SvgPackager class.
     * Optionally accepts configurations or dependencies.
     */
    constructor(svgoConfigPath: string);
    /**
     * Processes all SVG files in a given directory.
     * @param inputDirectory The directory containing SVG files to process.
     * @param outputDirectory The directory where optimized SVGs will be output.
     * @param tsOutputDirectory The directory where TypeScript files will be saved.
     * @param jsonOutputDirectory The directory where a JSON index of icons will be saved.
     */
    processSvgFiles(inputDirectory: string, outputDirectory: string, ts_output_directory: string, json_output_directory: string): Promise<void>;
    /**
     * Reads the content of an SVG file.
     * @param filePath The path to the SVG file.
     * @returns The content of the SVG file.
     */
    private readSvgFile;
    /**
     * Sanitizes a file name to be a valid TypeScript identifier.
     * @param fileName The original file name.
     * @returns A sanitized version of the file name.
     */
    private sanitizeFileName;
    private writeFiles;
    /**
     * Optimizes SVG content using SVGO.
     * @param svgContent The raw SVG content.
     * @returns The optimized SVG content.
     */
    private optimizeSvg;
    /**
     * Creates a TypeScript file from SVG content.
     * @param filePath The path of the SVG file.
     * @param svgContent The optimized SVG content.
     * @param outputDirectory The directory to output the TypeScript file.
     */
    private writeTypeScriptFile;
    /**
     * Writes the SVG content to a file.
     *
     * @param filePath The original file path of the SVG.
     * @param svgContent The SVG content to be written.
     * @param outputDirectory The directory to output the SVG file.
     */
    private writeSvgFile;
    /**
     * Writes a JSON file containing the names of processed icons.
     * This method creates a JSON file that lists all icon names which have
     * been processed, making it easier to reference or index these icons in
     * other parts of an application.
     *
     * @param iconNames An array of strings containing the names of the icons.
     * @param outputDirectory The directory where the JSON file will be saved.
     */
    private writeIconsJson;
}
export default SvgPackager;
