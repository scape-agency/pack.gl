// config/nunjucks.config.ts

// Copyright 2024 Scape Agency BV

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

// Importing path for potential future use in specifying template directories or other file paths
import path from 'node:path'


// ============================================================================
// Constants
// ============================================================================

/**
 * Configuration options for Nunjucks to ensure safe and efficient template rendering.
 * This setup is ideal for both development and production environments, providing a balance
 * between performance optimizations and security best practices.
 */
const nunjucksConfig = {

    autoescape: true, // Controls if output with dangerous characters are escaped automatically
    throwOnUndefined: false, // Throw errors when outputting a null/undefined value
    trimBlocks: true, // Automatically remove trailing newlines from a block/tag
    lstripBlocks: true, // Automatically remove leading whitespace from a block/tag
    noCache: true,

};


// ============================================================================
// Export
// ============================================================================

export default nunjucksConfig;


// ============================================================================
// Notes
// ============================================================================

// This configuration is tailored to a typical web application setup. Adjust the `noCache` option
// according to your caching strategy for production environments to optimize performance.