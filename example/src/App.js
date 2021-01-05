import React from 'react'
import { ImageLoader } from 'progressive-img-loader'
import Avatar from "@material-ui/core/Avatar";

const App = () => {
  return (
  <React.Fragment>
    <ImageLoader src={null}
                 srcPreview={null}
                 customImageComponent={Avatar}/>
  </React.Fragment>
  );
}

export default App
