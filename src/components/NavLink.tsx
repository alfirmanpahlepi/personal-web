import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface NavLinkProps {
  children: ReactNode;
  link: string;
  className: string;
  activeClassname: string;
  deactiveClassname: string;
}

export function NavLink({ children, link, className, activeClassname, deactiveClassname }: NavLinkProps) {
  const router = useRouter()
  return (
    <Link href={link}>
      <a className={(router.pathname !== link ? deactiveClassname : activeClassname) + " " + className}>
        {children}
      </a>
    </Link>
  )
}