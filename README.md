# 网页图片懒加载js

可以等图片加载完成后再显示

## 使用说明

### 引入工具库

```
<script src="https://lf6-cdn-tos.bytecdntp.com/cdn/jquery/3.6.0/jquery.min.js"></script>
<script src="本js工具地址"></script>

```
### 图片加载演示
img加载
```
<div id="imglist">
	<img style="width:500px;height:500px;" src="你的加载图像" data="https://wkphoto.cdn.bcebos.com/5fdf8db1cb134954d8596201464e9258d1094a14.jpg">
</div>
```
</div>

div背景加载

```
<div id="divlist">
	<div class="imgdiv" style="width:500px;height:500px;background-image: 你的加载图像;" data="https://wkphoto.cdn.bcebos.com/5fdf8db1cb134954d8596201464e9258d1094a14.jpg">
</div>
    
```
插入到最后
```
<script>
	errorimg="你的自定义错误图像，未设置将使用默认图像";
	$("#divlist").ImgLoading();
	$("#imglist").ImgLoading();
</script>
```
## 未来更新

 1、自定义错误图像比例
 
 2、更多需求请提出issue
