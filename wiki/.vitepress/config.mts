import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Qos Wiki",
  description: "",
  head: [
    [
      'link', {
        rel: 'icon', href: '/icon.ico'
      }
    ]
  ],


cacheDir: './.vitepress/cache',

lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
logo: '/icon.ico',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Starter Guide', link: '/StarterGuide/StarterIntro' },
      { text: 'Advanaced Guide', link: '/WIP' }
    ],

    sidebar: [
      {
        //text: 'Examples', link: '/WIP',
        items: [
          { text: 'Starter Guide', link: '/StarterGuide/StarterIntro', items:[
            {text: 'Modeler Terminology', link:'/StarterGuide/Terms'}
          ]},
          { text: 'Advanced Guide', link: '/WIP' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Amalite/BetterQosWiki' }
    ],

    search: {
      provider: 'local'
    },

    lightModeSwitchTitle: 'Let there be light!',
    darkModeSwitchTitle: 'Let there be dark!',
    darkModeSwitchLabel:'<p align="right">Theme</p>',

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
