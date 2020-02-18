#!/usr/bin/env sh
ln -sf $PWD/hooks/post-merge.sh $PWD/.git/hooks/post-merge
ln -sf $PWD/hooks/pre-push.sh $PWD/.git/hooks/pre-push
