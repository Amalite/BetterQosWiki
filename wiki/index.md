---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: false
hero:
  name: "Better Qos Wiki"
  text: ""
  tagline: A better version of the Wiki used to guide newcomers to making their own Sabers, Cubes, and Walls for Qosmetics.
  actions:
    - theme: brand
      text: New To Modeling?
      link: /StarterGuide/StarterIntro
    - theme: alt
      text: Ready for Advanced Skills?
      link: /WIP

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
  }
]
</script>
<br>
<br>
<hr>
<h1 align="center">Contributors</h1>
<p align="center">
People who helped out with the Wiki!
<VPTeamMembers size="medium" :members="members" />
</p>