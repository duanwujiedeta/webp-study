- #### 构建性能

```tex
1.webpack最新版本，每个版本的更新都经常进行性能优化；
2.nodejs的版本更新，也能达到更高效地构建；
3.loader的配置选项中，添加 include 字段，减少了 loader 对没必要的模块进行转换；
4.resolve.xxx的条目数会增加文件系统调用的次数，相应地更改，也可以提高性能；
5.可以在webpack中使用 cache 选项；
6.开发环境下，webpack的watch mode（监听模式）会比其他情况性能高，watchOptions.poll选项可以设置watch mode的轮询时间；
7.把编译结果写入内存来运行，会比输出到磁盘快很多很多（webpack-dev-server、webpack-hot-middleware、webpack-dev-middleware)；
```

- Devtool性能---devtool不同选项，性能差异不同

```tex
1."eval" 值具有最好的性能，但并不能帮助你转义代码；
2.cheap-source-map选项生成出来的 map 的质量会比较差；
3.eval-source-map 变体配置进行增量编译；
4.在开发环境下，避免使用生产环境的工具（如压缩、混淆等);
5.optimization.rmoveAvailableModules  optimization.removeEmptyChunks  optimization.splitChunks等优化配置对于大型项目会非常耗性能(更适用于小型代码库)；
6.output.pathinfo设置为false，会节省性能；
```

