# Strapi SCSS config

Test repo for Strapi SCSS webpack config

### How to :
1. generate plugin  
strapi generate:plugin testSCSS

### Add custom Webpack Config
Doc:  
https://strapi.io/documentation/developer-docs/latest/development/admin-customization.html#custom-webpack-config

Ref:  
https://www.npmjs.com/package/strapi-plugin-webpage-builder?activeTab=readme

### Install webpack Sass:
npm install sass-loader@10.1.1 sass@1.32.8 --save-dev

## Important! :
sass-loader latest version is 11.0.1 but very important to **install version 10** becasuse strapi use webpack 4 and it incompatible with strapi 

You can see installed webpack version:  
npm list webpack

## Insert Webpack Sass loader configuration:
Insert file as provided in this git :  
admin/admin.config.js

## Check Sass
source file:  
plugins/test-scss/admin/src/components/boolView/index.js  

insert new item to Tests collection and see result
