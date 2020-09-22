import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'
import Date from 'components/date'
import { GetStaticProps } from 'next'
import {faNextIcon} from "lib/fas-custom-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home ({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
}[]
}) {
  return (
    <Layout home>
      <Head>
  <title>{siteTitle}</title>
      </Head>
      <div>
<FontAwesomeIcon 
  icon={faNextIcon}
  size='10x'
/>
</div>
<section className={utilStyles.headingMd}>
  <p>[Your Self Intruction]</p>
  <p>
    (This is a sample website - you can build a site like this in{' '}
    <a href="https://nextjs.org/learn">Our Next.js tutorial</a>.)
  </p>
</section>
<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
  <h2 className={utilStyles.headingLg}>Blog</h2>
  <ul className={utilStyles.list}>
    {allPostsData.map(({ id, date, title }) => (
      <li className={utilStyles.listItem} key={id}>
        <Link href={`/post/${id}`}>
          <a>{title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
    ))}
  </ul>
</section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = getSortedPostsData()
  return {
    props: {
      allPostData
    }
  }
}