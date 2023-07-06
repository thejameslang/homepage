import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCapitalOne from '../public/images/works/capitalone_eyecatch.png'
import thumbVouchering from '../public/images/works/vouchering_eyecatch.png'
import thumbAssistek from '../public/images/works/assistek_eyecatch.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="capitalone"
              title="Capital One Home Equity"
              thumbnail={thumbCapitalOne}
            >
              Front end for Capital One&apos;s home equity offerings:
              prequalification process, home equity loans and home equity lines
              of credit
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="vouchering"
              thumbnail={thumbVouchering}
              title="CBRE Capital Markets Vouchering Platform"
            >
              CRM for Capital Markets producers
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="assistek"
              thumbnail={thumbAssistek}
              title="assisTek eDiary app for clinical trial studies"
            >
              Android app for clinical trial studies conducted on Android
              tablets
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
