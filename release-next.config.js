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
        "@semantic-release/npm",
    ]
};
