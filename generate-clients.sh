#! /bin/sh

NPM_VERSION=0.0.2
NPM_DESCRIPTION="Sleeper Api Client that was auto generated from an OpenAPi Specification"
NPM_AUTHOR=blastdan

TYPSCRIPT_NESTJS_DIR=typescript/nestjs
TYPSCRIPT_NESTJS_NPMNAME=sleeper-api-nestjs-client

TYPSCRIPT_ANGULAR_DIR=typescript/angular
TYPSCRIPT_ANGULAR_NPMNAME=sleeper-api-angular-client

openapi-generator-cli generate -i sleeper-openapi.yaml -g typescript-nestjs -o $TYPSCRIPT_NESTJS_DIR -p npmName=$TYPSCRIPT_NESTJS_NPMNAME -p npmVersion=$NPM_VERSION
openapi-generator-cli generate -i sleeper-openapi.yaml -g typescript-angular -o $TYPSCRIPT_ANGULAR_DIR -p npmName=$TYPSCRIPT_ANGULAR_NPMNAME -p npmVersion=$NPM_VERSION
touch $TYPSCRIPT_NESTJS_DIR/.npmignore

json -I -f ./$TYPSCRIPT_NESTJS_DIR/package.json -e "this.description='$NPM_DESCRIPTION'" -e "this.author='$NPM_AUTHOR'"
json -I -f ./$TYPSCRIPT_ANGULAR_DIR/package.json -e "this.description='$NPM_DESCRIPTION'" -e "this.author='$NPM_AUTHOR'"