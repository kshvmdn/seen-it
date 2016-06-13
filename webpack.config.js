const webpack = require('webpack')
const fs      = require('fs')
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve

const getConfig = require('hjs-webpack')

const isDev  = process.env.NODE_ENV === 'development'

const root    = resolve(__dirname)
const src     = join(root, 'src')
const modules = join(root, 'node_modules')
const dest    = join(root, 'dist')

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        title: 'SEEN IT',
        publicPath: isDev ? 'http://localhost:3000/' : '',
        meta: {
          'name': 'SEEN IT',
          'description': 'A replacement for the deprecated reddit.tv, stream videos via /r/videos.'
        }
      })
    }
  }
})

const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`

const matchCssLoaders = /(^|!)(css-loader)($|!)/

const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l && l.loader && l.loader.match(match))
  return found ? found[0] : null
}

const cssloader = findLoader(config.module.loaders, matchCssLoaders)

const newloader = Object.assign({}, cssloader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssloader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModulesNames}$3`)
})

config.module.loaders.push(newloader)
cssloader.test = new RegExp(`[^module]${cssloader.test.source}`)
cssloader.loader = newloader.loader

config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'style!css'
})

config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
])

config.resolve.root = [src, modules]
config.resolve.alias = {
  'css': join(src, 'styles'),
  'containers': join(src, 'containers'),
  'components': join(src, 'components'),
  'utils': join(src, 'utils'),
  'styles': join(src, 'styles')
}

module.exports = config
