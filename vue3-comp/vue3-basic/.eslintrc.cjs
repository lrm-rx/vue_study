module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "extends": ["plugin:vue/vue3-essential", "@vue/eslint-config-typescript"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": 0,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "vue/no-unused-vars": "off",
    },
}
