//注意每次调用$.get() 或$.post() 或 $.ajax()时
//会先调用ajaxPrefilter这个函数
//在函数中，可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    //再发起真正的Ajax请求之前，统一拼接请求的路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
})