import axios from 'axios';
import store from 'store';

const __ENV__ = 'local_dev'

fetch('/api/todo', {
    method: 'post',
    localKey:'todo',
    data: { test: 1 }
})

export function fetch(url, opt) {

    if (__ENV__ === 'local_dev') {
        localFetch(opt.localKey,opt.data)
    }
}

function localFetch(key, data) {
    store.set(key,data)
}