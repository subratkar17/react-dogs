module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'bundel.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    devtool: "source-map"
}