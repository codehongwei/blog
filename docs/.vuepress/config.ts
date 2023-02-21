import { defineUserConfig, defaultTheme } from 'vuepress'
import plugins from '../../config/plugin.config'
import navBar from '../../config/navbar.config'
import sideBar from '../../config/sidebar.config'
import SiteConfig from '../../config/site.config'
module.exports = defineUserConfig({
  ...SiteConfig,
  plugins,
  theme: defaultTheme({
    logo: '/images/logo.png', // logo
    navbar: navBar,
    sidebar: sideBar
  })
})