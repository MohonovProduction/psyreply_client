export default class Client {
  origin = 'https://api.psyreply.com'

  execute(url, init) {
    return new Promise(resolve => {
      fetch(`${this.origin}${url}`, init)
        .then(res => resolve(res))
        .catch(err => resolve(err))
    })
  }

  getBlock(token) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    return this.execute(`/block/user`, {
      method: 'GET',
      headers: headers
    })
  }

  passBlock(data, token) {
    data = JSON.stringify(data)

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    return this.execute(`/result/block/pass`, {
      method: 'POST',
      headers: headers,
      body: data
    })
  }

  changeTokenToUserToken(blockToken, userId) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${blockToken}`
    }

    return this.execute(`/user/${userId}/assign`,{
      method: 'GET',
      headers
    })
  }

  getResults(token) {

  }
}
