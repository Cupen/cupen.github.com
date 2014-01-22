#!/usr/bin/env bash

echo "Type messge for your commit:"
read msg
echo $msg
python ghp-import.py $1 -m "$msg"
# python ghp-import.py $1 -m "重整disqus,遗憾弄丢了个评论～"
# git push origin gh-pages