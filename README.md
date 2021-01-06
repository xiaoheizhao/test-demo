# test-demo
测试仓库
git --version 检查git是否安装成功
git init 初始化
git add . 将文件放到暂存区
git commit -m 测试   将暂存区的代码提交至远程仓库
git status 查看当前的项目有哪些改动的状态
git log  查看之前的提交记录
git log --author="zhaoyanjie"  查看某个人提交的代码
clear  清理屏幕


配置用户名和邮箱
git config --global user.name'用户名'
git config --global user.email 'youxiang'
git config --global --list    检查是否配置成功



想要修改项目中的文件时如何操作
1、手动删除本地文件
git status  红色的删除提示
git add .   删除之后的文件放到暂存区
git status   删除成功。绿色的删除提示
git commit -m 删除之后的版本   将暂存区的代码提交至远程仓库  
git log 提交成功。可以看到日志。

2、用代码进行删除
git rm utils/request.js   删除utils目录下的request.js，直接删除成功
git status
git add .
git commit -m 命令行删除文件

给文件重命名
1、手动在本地重命名
git status  本地重命名后，相当于删除原先的，复制出以另一个名字命名的。
git add 新名字
git rm 旧名字
git status   绿色。操作成功
git commit -m 手动重命名文件
git log

2、用代码重命名
git mv 旧名字 新名字
git status   绿色。操作成功
git commit -m 手动重命名文件
git log


移动文件到其他位置
本地新建一个文件夹
git mv index.js home  把index.js移动home中
git status 绿色。操作成功
git commit -m 移动文件夹
git status
git log


移动文件到其他位置并重命名

