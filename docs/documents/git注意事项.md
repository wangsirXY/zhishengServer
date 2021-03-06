### **写代码之前和提交代码之前一定要先 `git pull` 拉取服务器代码。**

- 提交代码之前**备份自己本地的代码**，以免冲突导致代码丢失。

- 代码提交时，说明前缀写上自己的昵称作为标识，方面发生冲突时对接代码。

  > 以 `昵称-` 开头，例如：GuAn-更改了首页列表。

遇到冲突时，一定要在群里告知，并找最后一次做提交操作的人员进行协作，一起确定需要保留的代码。



## 冲突解决方法

- 第一步：修改冲突代码（一定要检查所有文件，修改所有冲突）

- 第二步：`git add .` 

- 第三步：`git commit -m '描述说明'` 
- 第四步：`git push` 



## 丢弃当前合并

> 退出合并：还原合并前的代码。

```cmd
git merge --abort
```

​	




<style>
  * { line-height: 1.5em; }
</style>