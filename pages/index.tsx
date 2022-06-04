import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { Leadspace } from '../components'

import * as S from '../styles/pages/home'

export default function Home() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <Leadspace />
    </>
  )
}
