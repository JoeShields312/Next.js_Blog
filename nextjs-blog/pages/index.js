import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'
import Date from 'components/date'
import {faNextIcon} from "lib/fas-custom-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home({ allPostsData }) {
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
  <section className={utilStyles.headinMd}>
  </section>
  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
    <ul className={utilStyles.list}>

      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}