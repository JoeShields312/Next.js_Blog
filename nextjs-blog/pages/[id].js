import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'

export default function Post() {
    return <Layout>...</Layout>
}

export async function getStaticPaths() {

}

export async function getStaticProps({ params }) {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}