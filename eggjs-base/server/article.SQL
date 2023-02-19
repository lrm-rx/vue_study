create database egg_article;

use egg_article;

create table article(
  id int(11) not null auto_increment,
  img text default null comment '缩略图',
  title varchar(80) default null comment '文章标题',
  summary varchar(300) default null comment '文章简介',
  content text default null comment '文章内容',
  createTime timestamp default null comment '发布时间',
  primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';

insert into article(title, img, summary, content, createTime)
values('Python接口自动化测试框架实战 从设计到开发', 'https://5b0988e595225.cdn.sohucs.com/images/20190509/9eb98d2a00f84b52aa90e91824e90435.jpeg', '以实际工作为例，讲授前后端分离下的接口自动化测试工作', '以实际工作为例，讲授前后端分离下的接口自动化测试工作，在开发行业接口自动化测试必不可少，掌握自动化测试的工程师会变得越来越重要!全流程变战，快速积累项目经验。', '2019-10-10 10:20:20');
