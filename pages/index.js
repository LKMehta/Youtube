
import Link from 'next/link'

export default function Home() {
  return (
     <div>
      Welcome to my Application
      <ul>
        <li>
          <Link href="/component/addYouTubeUrl">
            <a>AddYouTubeUrl</a>
          </Link>
        </li>
        <li>
          <Link href="/component/playLatestVideo" >
            <a>PlayLatestVideo</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
