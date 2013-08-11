module.exports = function (grunt) {   

    // load all grunt tasks
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            simple: {
                src: ["app/**/*.ts"],
                html: ["app/**/*.html"],                
                reference: "app/reference.ts",
                out: 'app/out.js', 
                watch: 'app'
            }
        },
    });    
    
    grunt.registerTask("default", ["ts:simple"]);
};
