# Progressive Image Loader
Made working at <img src="https://nalarocks.com/assets/images/logo-nala@2x-min.png" width="90px"/>

A beautiful effect to preload images, made with love &lt;3

[![NPM](https://img.shields.io/npm/v/progressive-img-loader.svg)](https://www.npmjs.com/package/progressive-img-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save progressive-img-loader
```
OR
```bash
yarn add progressive-img-loader
```

## Usage

```jsx
import React, { Component } from 'react'
import ImageLoader from 'progressive-img-loader'

function ExampleComponent(){
    return (<ImageLoader src={"original-image.png"}
                         srcPreview={"thumb-img.png"}
                         alt={"Alt attribute"} />);
}
```

## License

MIT © [Lozadaa](https://github.com/Lozadaa)
