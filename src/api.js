const TOKEN = '28cd44e4-3694-9487-283f-edca7dac1d66'
const API_BASE = 'https://grubtime-dxrhzdtatl.now.sh/api/places'

const post = (path, body) => {
  const url = API_BASE + path
  return window.fetch(url, {
    method: 'POST',
    headers: {
      'Postman-Token': TOKEN,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => {
    return response.json()
  })
}

export { post }
