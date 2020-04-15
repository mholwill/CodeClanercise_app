const baseURL = 'http://localhost:3000/api/clients/'

export default {
  getClients() {
    return fetch(baseURL)
    .then(res => res.json())
  },
  postClient(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteClient(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  },
  updateClient(payload){
    const id = payload._id
    delete payload._id
    return fetch(baseURL + id, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
  }


}
