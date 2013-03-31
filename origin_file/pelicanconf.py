#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = u'Cupen<Cupenoruler at gmail dot com>'
SITENAME = u"Cupen' blog"
# SITEURL = u'http://cupenoruler.github.com'
SITEURL = u'feeds'

TIMEZONE = 'Asia/Chongqing'

DEFAULT_LANG = u'zh'

THEME = "themes/tuxlite_tbs"


# Blogroll
LINKS =  (('Pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          ('Python.org', 'http://python.org'),
          ('Jinja2', 'http://jinja.pocoo.org'))

# Social widget
SOCIAL = (('github', 'https://github.com/Cupenoruler'),
          ('weibo', 'http://weibo.com/cupenoruler'),)
		  
GITHUB_URL = u'https://github.com/Cupenoruler'

DEFAULT_PAGINATION = 5

# static paths will be copied under the same name
STATIC_PATHS = ["pictures",]

# A list of files to copy from the source to the destination
FILES_TO_COPY = (('extra/robots.txt', 'robots.txt'),)
