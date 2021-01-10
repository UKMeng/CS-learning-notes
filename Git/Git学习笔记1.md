在GitHub上重命名了repository后，需要在git上进行更改新地址的操作（虽然不更改也能完成同步，但是会报错）

在[这里](https://stackoverflow.com/questions/30443333/error-with-renamed-repo-in-github-remote-this-repository-moved-please-use-th)找到了解决方法：

最简单的办法时

```shell
git remote set-url origin [updated link url https://........git]
```

也可以

```shell
git remote rm origin
git remote add origin [updated link]
```