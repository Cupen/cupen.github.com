#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = u'Cupen<Cupenoruler at gmail dot com>'
SITENAME = u"无所不为轩";
# SITEURL = u'http://cupenoruler.github.com'
SITEURL = u'feeds'
DISQUS_SITENAME = u'cupenblog'


TIMEZONE = 'Asia/Chongqing'

DEFAULT_LANG = u'zh'

# THEME = "themes/tuxlite_tbs"
# THEME = "themes/html5-dopetrope"

# THEME = "themes/itsmyidea"
# THEME = "themes/nmnlist"
THEME = "themes/pelican-cait"


# Blogroll
LINKS =  (('pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          ('jinja2', 'http://jinja.pocoo.org'),
		  ('xueqiu','http://xueqiu.com/'))

# Social widget
SOCIAL = (('github', 'https://github.com/Cupenoruler'),
          ('weibo', 'http://weibo.com/cupenoruler'),)
		  
# GITHUB_URL = u'https://github.com/Cupenoruler'

DEFAULT_PAGINATION = 5

# static paths will be copied under the same name
STATIC_PATHS = ["pictures",]

# A list of files to copy from the source to the destination
FILES_TO_COPY = (('extra/robots.txt', 'robots.txt'),)
