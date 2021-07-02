import { useState } from "react"
import axios from "axios"
export default function AddYouTubeUrl() {
  const [youTubeUrl, setYouTubeUrl] = useState('')
 
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (youTubeUrl.indexOf('www.youtube.com') == -1) {
      alert('Invalid Youtube URL')
    }
    else {
      let body = {
        youTubeUrl: youTubeUrl
      }
      axios({
        method: 'post',
        url: '/api/youtube',
        data: body
      })
      .then(function (response) {
        alert('Data Submitted Successfully')
        resetForm()
      })
      .catch(function (error) {
        alert('Data Submission Failed')
      });
    }
  }

  const resetForm = () =>{
    setYouTubeUrl('')
  }

  const onChangeHandler = (event) => {
    setYouTubeUrl(event.target.value)
  }

  return (
    <div>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        Enter YouTube Url: <input id="youTubeUrl" name="youTubeUrl" type='url' value={youTubeUrl} onChange={event => onChangeHandler(event)} required />
        <button type="submit" >Add</button>
      </form>
    </div>
  );
}

