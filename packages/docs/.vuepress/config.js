module.exports = ctx => ({
  locales: {
    '/': {
      // lang: 'English',
      lang: 'en-US',
      text: 'English',
    },
    '/es/': {
      // lang: 'Español',
      lang: 'es-ES',
      text: 'Español',
    }
  },
  plugins: [
    ['vuepress-plugin-typescript']
  ],
  base: '/',
  title: 'Vue.js Framework Components - Vuesax',
  theme: require.resolve('../../vuepress-theme-vuesax/'),
  head: [
    ['link', { rel: 'icon', href: `/favicon2_1.png` }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no' }],
    ['meta', { name: 'author', content: 'Lusaxweb' }],
    ['meta', { name: 'google', content: 'nositelinkssearchbox' }],
    ['meta', { hid: 'description', name: 'description', content: 'Vuesax Framework Components for Vuejs' }],
    ['meta', { property: 'og:image', content: 'https://vuesax.com/vuesax_components.png' }],
    ['meta', { property: 'og:description', content: 'Vuesax Framework Components for Vuejs' }],
    ['meta', { property: 'og:title', content: 'Vuesax - Framework for Vuejs'}],
    ['meta', { property: 'og:url', content: 'https://vuesax.com/'}],
    ['meta', { name: 'twitter:card', content: 'summary_large_image'}],
    // ['script', {
    //   src: 'https://cdn.paddle.com/paddle/paddle.js'
    // }],
  ],
  themeConfig: {
    repo: 'lusaxweb/vuesax-next',
    docsDir: 'packages/docs',
    locales: {
      '/': {
        ...getNavbar(),
        ...getSidebar()
      },
      '/es/': {
        ...getNavbar('/es/'),
        ...getSidebar('/es/')
      }
    },

    repo: 'git@github.com:lusaxweb/vuesax-next.git',
    lastUpdated: true,
    linkPrevVersion: 'https://lusaxweb.github.io/vuesax/',
    searchPlaceholder: 'Vuesax Search',
  }
})

function getNavbar (lang = '/') {

  return {
    nav: [
      {
        text: `Guide`,
        link: `${lang}docs/guide/`,
        items: [
          { text: `Introduction`, link: `${lang}docs/guide/` },
          { text: `Getting Started`, link: `${lang}docs/guide/gettingStarted` },
        ]
      },
      {
        text: `Documentation`,
        link: `${lang}docs/`,
        items: [
          {
            text: `Theme`,
            items: [
              { text: `Color`, link: `${lang}docs/theme/` },
            ]
          },
          {
            text: `Layout`,
            items: [
              { text: `Grid`, link: `${lang}docs/layout/` },
            ]
          },
          {
            text: `Components`,
            items: [
              { text: `Button`, link: `${lang}docs/components/` },
              { text: `Alert`, link: `${lang}docs/components/Alert` },
              { text: `Loading`, link: `${lang}docs/components/Loading` },
              { text: `Input`, link: `${lang}docs/components/Input` },
							{ text: 'Checkbox', link: `${lang}docs/components/Checkbox` },
							{ text: 'Switch', link: `${lang}docs/components/Switch` },
							{ text: 'Select', link: `${lang}docs/components/Select` },
							{ text: 'Avatar', link: `${lang}docs/components/Avatar` },
							{ text: 'Notification', link: `${lang}docs/components/Notification` },
							{ text: 'Radio', link: `${lang}docs/components/Radio` },
							{ text: 'Tooltip', link: `${lang}docs/components/Tooltip` },
							// new component slot 1
            ]
          }
        ]
      },
      // {
      //   text: `Vuesax Pass`,
      //   link: `${lang}pass/`,
      //   items: []
      // },
      {
        text: `License`,
        link: `${lang}license/`
      },
      {
        text: `Ecosystem`,
        // link: `${lang}ecosystem/`,
        items: [
          {
            text: `Social`,
            items: [
              { text: `GitHub`, link: `https://github.com/lusaxweb/vuesax` },
              { text: `Discord`, link: `https://discord.gg/9dsKtvB` },
              { text: `Twitter`, link: `https://twitter.com/vuesax` },
              { text: `Medium`, link: `https://medium.com/@luisdanielrovira8` }
            ]
          },
          {
            text: `Help`,
            items: [
              { text: `Issues`, link: `https://github.com/lusaxweb/vuesax/issues` },
              { text: `Edit Page`, link: `https://github.com/lusaxweb/vuesax` },
              { text: `Latest Releases`, link: `https://github.com/lusaxweb/vuesax/releases` },
            ]
          },
          {
            text: `Contact`,
            items: [
              { text: `Lusaxweb`, link: `http://lusaxweb.net` },
              { text: `Chat`, link: `https://discordapp.com/invite/9dsKtvB` },
              { text: `Pull Request`, link: `https://github.com/lusaxweb/vuesax/pulls` },
              { text: `Codepen Template`, link: `https://codepen.io/lusaxweb/pen/mxMKYr` }
            ]
          }
        ]
      },
      {
        text: '...',
        items: [
          { text: `Branding`, link: `/branding/` },
        ]
      }
    ]
  }
}

function getSidebar (lang = '/') {
  return {
    sidebar: {
      [`${lang}docs/`]: [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            `${lang}docs/guide/`,
            `${lang}docs/guide/gettingStarted`,
          ]
        },
        {
          title: `Theme`,
          collapsable: false,
          children: [
            `${lang}docs/theme/`,
          ]
        },
        {
          title: `Components`,
          collapsable: false,
          children: [
            `${lang}docs/components/`,
            `${lang}docs/components/Alert`,
            `${lang}docs/components/Loading`,
            `${lang}docs/components/Input`,
						`${lang}docs/components/Checkbox`,
						`${lang}docs/components/Switch`,
						`${lang}docs/components/Select`,
						`${lang}docs/components/Avatar`,
						`${lang}docs/components/Notification`,
						`${lang}docs/components/Radio`,
						`${lang}docs/components/Tooltip`,
						// new component slot 2
          ]
        },
        {
          title: `Layout`,
          collapsable: false,
          children: [
            `${lang}docs/layout/`,
          ]
        },
      ],
    }
  }
}
