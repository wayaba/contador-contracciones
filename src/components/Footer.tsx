
interface Props {
  author: string
  github: string
}

export const Footer: React.FC<Props> = ({ author, github }) => {
  return (
      <footer className="text-xs text-center opacity-60  text-white/80">
        {' '}
        Desarrollado por{' '}
        <a
          className="text-white hover:underline"
          target="_blank"
          href={'mailto:pabloj.pedraza@gmail.com'} rel="noreferrer"
        >
          {author}
        </a>{' '}
        &bull;{' '}
        <a
          className="text-white hover:underline"
          target="_blank"
          href={`https://github.com/${github}`} rel="noreferrer"
        >
          Github
        </a>
      </footer>
  )
}
