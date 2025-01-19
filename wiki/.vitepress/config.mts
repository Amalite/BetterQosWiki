import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Qos Wiki",
  titleTemplate: 'BQW',
  description: "A Wiki that strives to teach modelers new and experienced about modeling for Qosmetics.",
  head: [
    [
      'link', {
        rel: 'icon', href: 'https://raw.githubusercontent.com/Amalite/BetterQosWiki/refs/heads/master/wiki/icon.ico'
      }
    ],
    [
      'meta', {
        property: 'og:image', content: 'https://raw.githubusercontent.com/Amalite/BetterQosWiki/refs/heads/master/wiki/images/icon.png'
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
logo: 'https://raw.githubusercontent.com/Amalite/BetterQosWiki/refs/heads/master/wiki/images/icon.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Starter Guide', link: '/StarterGuide/StarterIntro' },
      { text: 'Advanced Guide', link: '/AdvancedGuide/AdvancedIntro' }
    ],

    sidebar: [
      {
        //text: 'Examples', link: '/WIP',
        items: [
          { text: 'Starter Guide', link: '/StarterGuide/StarterIntro', items:[
            {text: 'Setup', items:[
            {text: 'Modeler Terminology', link:'/StarterGuide/Terms'},
            {text: 'Installing Unity', link:'/StarterGuide/InstallUnity'},
            {text: 'Blender Tutorial', link:'/StarterGuide/BlenderTutorial'},
            {text: 'Types of Models', link:'/StarterGuide/ModelTypes'}
            ]},

            {text: 'Creating a Design', link:'/StarterGuide/DesignCreation'},
            {text: 'Making the Model', link:'/StarterGuide/ModelCreation'}
          ]},
          { text: 'Advanced Guide', link: '/AdvancedGuide/AdvancedIntro', items:[
            {text:'Videos', link:'/AdvancedGuide/Videos'}
        ]}
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
        timeStyle: 'short'
      }
    },

    footer: {
      message: '<a href="https://github.com/Amalite/BetterQosWiki">Github</a>',
    }
  }
})
