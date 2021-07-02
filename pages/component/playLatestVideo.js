import { useEffect, useState } from "react"
import axios from "axios";

export default function PlayLatestVideo() {
  const [latestYoutubeUrl, setlatestYoutubeUrl] = useState('');

  useEffect(() => {
    axios.get('/api/youtube')
      .then((res) => {
        if(res.data && res.data.url) {
          setlatestYoutubeUrl(res.data.url.replace('www.youtube.com/watch?v=','www.youtube-nocookie.com/embed/'))
        }
      })
  }, [latestYoutubeUrl])


  return (
    <div><iframe width="420" height="345" src={latestYoutubeUrl}></iframe></div>
  )
}