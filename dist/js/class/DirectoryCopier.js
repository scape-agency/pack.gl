"use strict";
// class/DirectoryCopier.ts
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
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
// ============================================================================
// Classes
// ============================================================================
/**
 * A class for copying files from one directory to another.
 */
class DirectoryCopier {
    /**
     * Copies all files and subdirectories from a source directory to a destination directory.
     * @param srcDir The source directory path.
     * @param destDir The destination directory path.
     * @throws Will throw an error if copying fails for any file or directory.
     */
    async copyFiles(srcDir, destDir) {
        try {
            const resolvedSrcDir = path_1.default.resolve(srcDir);
            const resolvedDestDir = path_1.default.resolve(destDir);
            await this.recursiveCopy(resolvedSrcDir, resolvedDestDir);
            console.log(`Files copied from ${resolvedSrcDir} to ${resolvedDestDir}`);
        }
        catch (error) {
            console.error('Error copying files:', error);
            throw error;
        }
    }
    /**
     * Recursively copies files and directories.
     * @param srcDir Source directory.
     * @param destDir Destination directory.
     */
    async recursiveCopy(srcDir, destDir) {
        await fs_1.promises.mkdir(destDir, { recursive: true });
        const entries = await fs_1.promises.readdir(srcDir, { withFileTypes: true });
        for (let entry of entries) {
            const srcPath = path_1.default.join(srcDir, entry.name);
            const destPath = path_1.default.join(destDir, entry.name);
            entry.isDirectory() ?
                await this.recursiveCopy(srcPath, destPath) :
                await fs_1.promises.copyFile(srcPath, destPath);
        }
    }
}
// ============================================================================
// Export
// ============================================================================
exports.default = DirectoryCopier;
