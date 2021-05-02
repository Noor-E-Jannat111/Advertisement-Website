import Link from "next/head"
import React, { useState } from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  const [links, setLinks] = useState(navbar)
  return (
    <>
      <ul>
        {links.map(({ id, title, url }) => (
          <li key={id}>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navbar
