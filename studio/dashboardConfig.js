export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec5a2a135b58f37c60f462a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rmahii2c',
                  apiId: '04ff7c0b-84f1-4931-a612-4e78dfc535fd'
                },
                {
                  buildHookId: '5ec5a2a1ed78a3138c082c31',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-oidin1yw',
                  apiId: '12ad9a86-9e5d-4d20-aff0-eb79c0aba516'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LarrySwanson/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-oidin1yw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
