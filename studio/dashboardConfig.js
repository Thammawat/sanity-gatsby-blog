export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d12d89e0908c23f9908da10',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ip275vbr',
                  apiId: 'b0419a00-d015-4c6c-a965-8028f2cd3bd8'
                },
                {
                  buildHookId: '5d12d89f1758676bc0cbb4f8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ukds4oqc',
                  apiId: '9ced0c06-2cea-431b-892a-3ff4304edc5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Thammawat/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ukds4oqc.netlify.com', category: 'apps'}
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
