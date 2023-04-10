export type TImage = {
  src: string
  alt: string
}

export interface ICard {
  icon: string
  title: string
  description: string
}

export interface IAlumniCard {
  image: TImage
  title: string
  description: string
}

export const cardData: Array<ICard> = [
  {
    icon: 'mdi:code-json',
    title: 'Web Development',
    description: 'Learn how to develop a website with html/css/js react and more....'
  },
  {
    icon: 'mdi:creation',
    title: 'UI/UX Design',
    description: 'Learn how to design UI/UX before code an app'
  },
  {
    icon: 'mdi:android',
    title: 'Android Development',
    description: 'Learn how to develop an Android App with Java/Kotlin'
  }
]

export const alumniCardData: Array<IAlumniCard> = [
  {
    image: {
      src: '@/assets/images/person/man.webp',
      alt: 'john doe'
    },
    title: 'John Doe',
    description: 'I Love all mentor, They are humble'
  },
  {
    image: {
      src: '@/assets/images/person/teen.webp',
      alt: 'hilmy'
    },
    title: 'Hilmy',
    description: 'Thanks for mentor, now i can earn money by build a website'
  },
  {
    image: {
      src: '@/assets/images/person/women.webp',
      alt: 'Alexander'
    },
    title: 'Alexander',
    description: 'I Really love UI/UX Desgin classes'
  }
]
