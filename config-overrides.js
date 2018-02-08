const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast');


module.exports = {
    webpack: function (config, env) {
        config = rewireInlineImportGraphqlAst(config, env);
        return config;
    },
    jest: function (config) {
        // config.transform["\\.(gql|graphql)$"] = "D:\\Experiments\\create-react-app-rewired\\node_modules\\jest-transform-graphql\\index.js"
        return config;
    }
}
