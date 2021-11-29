module.exports = {
    branches: [
        {
            name: "main"
        },
        {
            name: "next",
            channel: "next",
            prerelease: "next"
        }
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/npm",
    ]
};
