---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: false
hero:
  name: "Better Qos Wiki"
  text: ""
  tagline: A better version of the Wiki used to guide newcomers to making their own Sabers, Cubes, and Walls for Qosmetics/Custom Models.
  actions:
    - theme: brand
      text: New To Modeling?
      link: /StarterGuide/StarterIntro
    - theme: alt
      text: Ready for some Advanced Skills?
      link: /AdvancedGuide/AdvancedIntro
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Amalite.png',
    name: 'Amalien (Amalite) the Formovian',
    title: 'Creator, Main Author',
    links: [
      { icon: 'github', link: 'https://github.com/Amalite' },
      { icon: 'twitter', link: 'https://twitter.com/Formovian' }
    ]
  },
{
    avatar: 'https://yt3.googleusercontent.com/qHEB-pHoZG2owzW1BvB0q25BgPUWy860i_czU-Khy0bSl9RZ9qRoe75HgictrKuOosSVxVfLpw=s160-c-k-c0x00ffffff-no-rj',
    name: '3.wav (3wav) 3.wav',
    title: 'Video Guide Author',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/@wav-po2ur' }
    ]
  },
]
</script>
<hr>
<h1 align="center">Contributors</h1>
<p align="center">
People who helped out with the Wiki!
<VPTeamMembers size="medium" :members="members" />
</p>