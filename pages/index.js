import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Dallas!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            James Lang
          </Heading>
          <p>Digital Artisan ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/james.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          As a full-stack developer and freelancer based in Dallas, I enjoy
          creating digital solutions for intriguing challenges. I have a knack
          for launching products, from planning and designing to coding and
          problem-solving. When I&apos;m offline, I love tickling the ivories.
          I&apos;m currently looking for opportunities in software engineering.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Completed the Music program of the Pennsylvania Governor's School for
          the Arts
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Completed the Econometrics Track of the undergraduate Economics degree
          in the College of the Liberal Arts at Penn State
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Worked at Capital One
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at CBRE
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at Indeed
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Cooking, Drawing,{' '}
          <Link
            href="https://drive.google.com/file/d/1Iak8OqqY1RBSPAX07R7QJckroVX7UZST/view?usp=sharing"
            target="_blank"
          >
            Playing Piano
          </Link>
          , Touge (
          <Link href="https://youtu.be/WnSDuSxofJs" target="_blank">
            Kansei Dorifto
          </Link>
          ),{' '}
          <Link
            href="https://drive.google.com/file/d/1a0nqRfnrEnrXzs6T8HAcFsIIEK9hQIQc/view?usp=sharing"
            target="_blank"
          >
            Wushu
          </Link>
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
