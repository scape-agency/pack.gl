/**
 * Configuration object for package.json properties, used to define metadata,
 * file inclusions, and other necessary project configurations.
 */
declare const packageConfig: {
    name: string;
    version: string;
    description: string;
    keywords: string;
    license: string;
    homepage: string;
    funding: {
        type: string;
        url: string;
    }[];
    main: string;
    types: string;
    files: string[];
};
export default packageConfig;
