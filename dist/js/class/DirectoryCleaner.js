"use strict";
// class/DirectoryCleaner.ts
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
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
// ============================================================================
// Classes
// ============================================================================
class DirectoryCleaner {
    /**
     * Recursively deletes all contents of the directory asynchronously.
     * @param dirPath The path to the directory to clean.
     */
    async cleanDirectory(dirPath) {
        try {
            const files = await fs_1.promises.readdir(dirPath);
            for (const file of files) {
                const curPath = path_1.default.join(dirPath, file);
                const stat = await fs_1.promises.lstat(curPath);
                if (stat.isDirectory()) {
                    await this.cleanDirectory(curPath);
                }
                else {
                    await fs_1.promises.unlink(curPath);
                }
            }
            await fs_1.promises.rmdir(dirPath);
        }
        catch (error) {
            console.error(`Error cleaning directory ${dirPath}: ${error}`);
            throw error; // Rethrow the error for further handling if necessary
        }
    }
}
// ============================================================================
// Export
// ============================================================================
exports.default = DirectoryCleaner;
