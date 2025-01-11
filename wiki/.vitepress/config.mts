import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Qos Wiki",
  titleTemplate: 'BQW',
  description: "A Wiki that strives to teach modelers new and experienced about modeling for Qosmetics.",
  head: [
    [
      'link', {
        rel: 'icon', type:"image/x-icon", href: '/icon.ico'
      }
    ],
    [
      'meta', {
        property: 'og:image', content: '/images/icon.png'
      }
    ],
    [
      'meta', {
        name: 'keywords', content:"Qosmetics, Beat Saber, Saber Creation, Whacker Creation, Whackers, Sabers, Beat Saber Mods, Qos Wiki, Custom Sabers, Custom Whackers"
      }
    ],
    [
      'meta', {
        content: '#C03DAF', name:"theme-color"
      }
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
logo: '/images/icon.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Starter Guide', link: '/StarterGuide/StarterIntro' },
      { text: 'Advanced Guide', link: '/WIP' }
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
