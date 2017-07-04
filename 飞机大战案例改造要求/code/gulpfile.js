//gulp
//var gulp = require("gulp");
//gulp.src("css/dafeiji.css/*.css");
//.pipe(gulp.dest("dest/css"))

//gulp.task()

//var gulp = require("gulp");
//
//gulp.task("one",function(){
//	console.log("one-task!")
//})
//
//gulp.task("two",function(){
//	console.log("two-task!")
//})
//
//gulp.task("three",function(){
//	console.log("three-task!")
//})
//
//gulp.task("default",["one","two","three"],function(){
//	console.log("default-task!")
//})


//var obj = {
//	removeComments: true, //清除 HTML 注释
//	collapseWhitespace: true, //压缩 HTML
//	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==><input checked/>
//	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//	removeScriptTypeAttributes: true, //删除<script>的 type="text/javascript"
//	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的 type="text/css"
//	minifyJS: true, //压缩页面 JS
//	minifyCSS: true //压缩页面 CSS
//}
//
//var gulp = require('gulp');
//var uglify = require('gulp-uglify'); //js 压缩插件
//var bom = require('gulp-bom'); //解决中文乱码插件
var minifyCss = require('gulp-minify-css'); //css 压缩插件
//var minifyHtml = require('gulp-minify-html'); //html 压缩插件
//var imagemin = require('gulp-imagemin'); //图片压缩相关插件
//var pngquant = require('imagemin-pngquant'); //png 图片压缩插件
//var rename = require('gulp-rename'); //重命名插件

var gulp = require('gulp');  
var minifyCss = require('gulp-minify-css');  
gulp.task('cssTask', function () {  
	gulp.src('css/*dafeiji.css')  
    .pipe(minifyCss())  
    .pipe(gulp.dest('dest/css'));  
}); 
gulp.task('default', ['cssTask']);