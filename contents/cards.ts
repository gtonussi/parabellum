import { IconType } from 'react-icons'
import { FaHandshake } from 'react-icons/fa'
import { GiPistolGun } from 'react-icons/gi'
import { IoDocumentText } from 'react-icons/io5'

type CardContent = {
  copy: string
  icon: IconType
  title: string
}

export const cards: CardContent[] = [
  {
    copy: 'Obtenha a permissão para comprar e ter armas de fogo e munição em casa ou local de trabalho.',
    icon: FaHandshake,
    title: 'POSSE',
  },
  {
    copy: 'Tenha o direito de portar a sua arma fora de sua casa ou local de trabalho.',
    icon: GiPistolGun,
    title: 'PORTE',
  },
  {
    copy: 'Emita o Certificado de Registro e comprove que você desempenha atividades autorizadas.',
    icon: IoDocumentText,
    title: 'CR',
  },
]
