import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import * as S from '../styles/pages/home'

export default function Home() {
  useEffect(() => {
    AOS.init()
  })

  return <S.Title data-aos="fade-up">My page</S.Title>
}
