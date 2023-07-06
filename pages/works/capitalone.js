import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="CapitalOne">
      <Container>
        <Title>
          Capital One <Badge>2010</Badge>
        </Title>
        <Paragraph>An awesome first experience</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.capitalone.com">
              https://www.capitalone.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Angular</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="">
              How I did it <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/capitalone_01.png" alt="Capital One" />
        <WorkImage src="/images/works/capitalone_02.png" alt="Capital One" />
        <WorkImage src="/images/works/capitalone_03.png" alt="Capital One" />
      </Container>
    </Layout>
  )
}

export default Work
