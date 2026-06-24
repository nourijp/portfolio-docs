import { sanity } from '@/lib/sanity'
import { getDocBySlugQuery, getAllDocsQuery } from '@/lib/sanityQueries'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import DocumentationPage from '@/app/components/documentation'

export const metadata: Metadata = {
  title: 'Documentation | docsta',
}

export async function generateStaticParams() {
  const docs = await sanity.fetch(getAllDocsQuery)
  return docs.map((doc: any) => ({
    slug: doc.slug.current,
  }))
}

export default async function DocPage({ params }: any) {
  const doc = await sanity.fetch(getDocBySlugQuery(params?.slug))

  if (!doc) return notFound()

  return <DocumentationPage doc={doc} />
}
