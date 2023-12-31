"use strict";
// class/TemplateWriter.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2023 Scape Agency BV
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ============================================================================
// Import
// ============================================================================
var promises_1 = __importDefault(require("fs/promises"));
var path_1 = __importDefault(require("path"));
var nunjucks_1 = __importDefault(require("nunjucks"));
var nunjucks_config_js_1 = __importDefault(require("../config/nunjucks.config.js"));
// ============================================================================
// Classes
// ============================================================================
class TemplateWriter {
    /**
     * Default configuration for the TypeScript compiler.
     */
    static { this.defaultConfig = nunjucks_config_js_1.default; }
    /**
     * Constructs a TemplateWriter instance.
     * @param templatesDir - Directory for Nunjucks templates.
     */
    constructor(templatesDir, context, customConfig = {}) {
        this.context = context;
        this.config = {
            ...TemplateWriter.defaultConfig,
            ...customConfig
        };
        nunjucks_1.default.configure(templatesDir, this.config);
    }
    /**
     * Generates a template using the provided template file and context.
     * @param template - The template file name.
     * @returns The rendered template as a string.
     */
    async generateTemplate(template) {
        try {
            return nunjucks_1.default.render(template, this.context);
        }
        catch (error) {
            console.error(`Error generating template: ${error}`);
            // throw error;
            throw new Error('Template generation failed');
        }
    }
    /**
     * Writes the rendered template content to a file.
     * @param template - The template file name.
     * @param outputFile - The output file path.
     */
    async generateToFile(template, outputFile) {
        try {
            const content = await this.generateTemplate(template);
            const dir = path_1.default.dirname(outputFile);
            // Ensure the directory exists
            await promises_1.default.mkdir(dir, { recursive: true });
            // Write the file
            await promises_1.default.writeFile(outputFile, content, 'utf-8');
        }
        catch (error) {
            console.error(`Error writing to file: ${error}`);
            throw new Error('File writing failed');
        }
    }
}
// ============================================================================
// Export
// ============================================================================
exports.default = TemplateWriter;
