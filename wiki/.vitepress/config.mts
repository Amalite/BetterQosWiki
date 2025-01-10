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
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-PERFQ84FBP' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PERFQ84FBP');`
    ]
  ],

lang: 'en-US',
cleanUrls: true,
cacheDir: '/.vitepress/cache',
base: '/BetterQosWiki/',
lastUpdated: true,
//srcDir: './wiki',

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
    darkModeSwitchLabel:'Theme',

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
