import { DocsPage, DocsContainer } from '@storybook/addon-docs';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  themes: {
    default: 'A',

    list: [
      { name: 'A', class: 'theme-a', color: '#23b7e5', href: 'themes/theme-a.css' },
      { name: 'B', class: 'theme-b', color: '#37bc9b', href: 'themes/theme-b.css' },
      { name: 'C', class: 'theme-c', color: '#7266ba', href: 'themes/theme-c.css' },
      { name: 'D', class: 'theme-d', color: '#f05050', href: 'themes/theme-d.css' },
      { name: 'E', class: 'theme-e', color: '#1797be', href: 'themes/theme-e.css' },
      { name: 'F', class: 'theme-f', color: '#2b957a', href: 'themes/theme-f.css' },
      { name: 'G', class: 'theme-g', color: '#564aa3', href: 'themes/theme-g.css' },
      { name: 'H', class: 'theme-h', color: '#ec2121', href: 'themes/theme-h.css' },
    ],
    onChange: (theme) => {
      const storybookIframe = document.getElementById('storybook-preview-iframe')
      const storybookIframeDocument = storybookIframe.contentDocument || storybookIframe.contentWindow.document
      const storybookHtml = storybookIframeDocument.querySelector('html')
      if (theme) {
        console.log('THEME:', theme.name)
        var head = storybookHtml.getElementsByTagName('head')[0]
        var link = document.createElement('link')
        link.id = 'myTheme'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href = theme.href
        link.media = 'all'
        head.appendChild(link)
      } else {
        console.log('THEME:', 'None')
      }
    },
  },
}