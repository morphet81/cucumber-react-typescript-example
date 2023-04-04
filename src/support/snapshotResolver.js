module.exports = {
    testPathForConsistencyCheck: 'some/example.spec.tsx',

    resolveSnapshotPath: (testPath, snapshotExtension) =>
        testPath.replace(/^(.*\.spec)\.[tj]sx?/, `$1${snapshotExtension}`),

    resolveTestPath: (snapshotFilePath, snapshotExtension) =>
        snapshotFilePath.replace(snapshotExtension, '.tsx'),
}