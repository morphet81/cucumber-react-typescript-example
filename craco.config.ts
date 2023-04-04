export default {
    jest: {
        configure: {
            moduleNameMapper: {
                "^axios$": "axios/dist/axios.js",
            },
            moduleFileExtensions: [
                "web.js",
                "js",
                "web.ts",
                "ts",
                "web.tsx",
                "tsx",
                "json",
                "web.jsx",
                "jsx",
                "node",
                "feature",
            ],
            roots: [
                "<rootDir>/src",
                "<rootDir>/specifications",
            ],
            setupFilesAfterEnv: [
                "<rootDir>/src/support/setupTests.ts"
            ],
            snapshotResolver: "<rootDir>/src/support/snapshotResolver.js"
        }
    },
    webpack: {
        exclude: {
            test: [
                /\.tsx$/i,
            ],
        },
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    }
}