"use strict";
// ============================================================================
// Import
// ============================================================================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const path_1 = require("path");
// ============================================================================
// Functions
// ============================================================================
/**
 * Reads and parses the package.json file located at the specified path.
 * This function is designed to handle errors gracefully, such as file not found or JSON parsing errors.
 *
 * @param packageJsonPath - The relative or absolute path to the package.json file.
 * @returns {Promise<Object>} A promise that resolves to the parsed JSON object from the package.json file.
 * @throws {Error} Throws an error if the file cannot be read or if the content is not valid JSON.
 */
function readPackageJson(packageJsonPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fullPath = path_1.default.resolve(packageJsonPath); // Ensures the path is absolute
            const fileContent = yield promises_1.default.readFile(fullPath, 'utf-8');
            return JSON.parse(fileContent);
        }
        catch (error) {
            // Customize error message based on the error type
            if (error.code === 'ENOENT') {
                throw new Error(`The file at ${packageJsonPath} was not found.`);
            }
            else if (error instanceof SyntaxError) {
                throw new Error(`Error parsing JSON from ${packageJsonPath}: ${error.message}`);
            }
            else {
                throw new Error(`An unexpected error occurred while reading ${packageJsonPath}: ${error.message}`);
            }
        }
    });
}
// async function readPackageJson(packageJsonPath: string) {
//     const fullPath = path.resolve(packageJsonPath);
//     const fileContent = await fs.readFile(fullPath, 'utf-8');
//     return JSON.parse(fileContent);
// }
// ============================================================================
// Export
// ============================================================================
exports.default = readPackageJson;
// ============================================================================
// Example
// ============================================================================
// (async () => {
//     try {
//         const packageJson = await readPackageJson('./path/to/package.json');
//         console.log('Package JSON:', packageJson);
//     } catch (error) {
//         console.error('Failed to read package.json:', error);
//     }
// })();
