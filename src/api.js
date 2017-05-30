import auth from './auth'
const API_BASE = 'https://grubtime-jhowehlsxt.now.sh'

const get = (path, query) => {
  let url = API_BASE + path
  if (query) {
    url += '&q=' + query
  }
  const headers = {
    'cache-control': 'no-cache'
  }
  if (auth.isSignedIn) {
    headers['Authorization'] = `Bearer ${auth.token}`
  }
  return window.fetch(url, {
    method: 'GET',
    headers
  })
    .then((response) => response.json())
}

const post = (path, body) => {
  const url = API_BASE + path
  const headers = {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache'
  }
  if (auth.isSignedIn) {
    headers['Authorization'] = `Bearer ${auth.token}`
    console.log('is signed in...')
  }
  return window.fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  }).then((response) => {
    return response.json()
  })
}

export { get, post }
