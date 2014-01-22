#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = u'Cupen<Cupen@foxmail.com>'
SITENAME = u"无所不为轩"
# SITEURL = u'http://cupen.github.com'
DISQUS_SITENAME = u'cupen'
TIMEZONE = 'Asia/Chongqing'
DEFAULT_LANG = u'zh'
THEME = "themes/pelican-cait"


# Blogroll
LINKS =  (('pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          ('jinja2', 'http://jinja.pocoo.org'),
		  ('xueqiu','http://xueqiu.com/'))

# Social widget
SOCIAL = (('github', 'https://github.com/cupen'),
          ('weibo', 'http://weibo.com/cupenoruler'),)
		  
# GITHUB_URL = u'https://github.com/cupen'

DEFAULT_PAGINATION = 6

# static paths will be copied under the same name
STATIC_PATHS = ["pictures",'extra/robots.txt']

	
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
}
