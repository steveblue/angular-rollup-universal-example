#!/bin/bash
echo universal i18n
rm -rf ./dist
ngr build universal --locale en
ngr build universal --locale fr
ngr build universal --locale es