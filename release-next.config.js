module.exports = {
    branches: [
        "main",
        {
            name: "next",
            channel: "next",
            prerelease: "next"
        }
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md"
            }
        ],
        "@semantic-release/npm",
        // "@semantic-release/git",
        "@semantic-release/github"
    ]
};
