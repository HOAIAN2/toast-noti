# toast-noti

Simple toast library

## Install

``` console
npm i toast-noti
```

## Usage

```js
import Toast from 'toast-noti'
import 'toast-noti/dist/toast.style.css'
// You can custom CSS if you want.

const toast = new Toast({
    duration: 3000,
    position: 'top-right', // Can custom with CSS
    pauseOnHover: true,
    appendOnTopBody: true // If true, container auto append on body
})

toast.success('Message')
toast.error('Message')
toast.alert('Message')
```
