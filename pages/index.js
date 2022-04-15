import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Skidee. 
          <br></br>
          I like making random stuff and learning new things :)
        </p>
        <p>
          I'm active on <a href="https://twitter.com/HeySkidee" target="_blank">Twitter</a>, I tweet about my learnings throughout the process and some cool resources.
          <br></br>
          Checkout my projects on <a href="https://github.com/HeySkidee" target="_blank">Github</a>.
          And feel free to join the community on <a href='https://skidee.me/discord' target="_blank">Discord</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

        <h2 className={utilStyles.headingLg}>More stuff</h2>
        <p>
          <a href='https://skidee.me/HeySkidee' target="_blank">YouTube</a>, <a href='https://www.instagram.com/HeySkidee' target="_blank">Instagram</a>, <a href='https://soundcloud.com/HeySkidee' target="_blank">SoundCloud</a>.
        </p>


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
