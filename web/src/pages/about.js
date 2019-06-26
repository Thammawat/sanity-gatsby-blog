import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { toPlainText } from '../lib/helpers'

export const query = graphql`
  query AboutPageQuery{
      sanityPage(slug: {current:{eq:"about"}}){
        title
      }
  }
`

const AboutPage = props => {
  const {data, errors} = props
  const {title} = data.sanityPage
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <p>{title}</p>
    </Layout>
  )
}

export default AboutPage
