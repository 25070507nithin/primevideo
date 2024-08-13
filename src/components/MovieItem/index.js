// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        className="popup-content"
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
      >
        {close => (
          <div>
            <button
              aria-label="Close"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
