import { Cafecito } from './Cafecito'

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
        <div className="mt-2">
            <a
              href="https://cafecito.app/pablojpedraza"
              rel="noopener noreferrer"
              target="_blank"
              className="text-center items-center justify-center hover:opacity-70 m-auto"
            >
              <Cafecito/>
            </a>
          </div>
      </footer>
  )
}
