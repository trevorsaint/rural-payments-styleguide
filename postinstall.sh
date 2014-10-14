#!/bin/bash

export GEM_HOME=$PWD/gems

mkdir -p $GEM_HOME
gem install compass

$GEM_HOME/bin/compass compile --sass-dir assets/sass --css-dir assets/stylesheets -c config/config.rb