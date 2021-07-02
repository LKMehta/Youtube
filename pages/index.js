
import Link from 'next/link'

export default function Home() {
  return (
     <div>
      Video Archive Repository
      <ul>
        <li>
          <Link href="/component/addYouTubeVideo">
            <a>Add YouTube Video</a>
          </Link>
        </li>
        <li>
          <Link href="/component/playLatestVideo" >
            <a>Play Latest Video</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
