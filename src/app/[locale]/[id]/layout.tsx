type LayoutProps = {
  params: Promise<{
    id: string
    locale: string
  }>
  children: React.ReactNode
}

export default async function ProjectLayout({ children }: LayoutProps) {
  return children
}
