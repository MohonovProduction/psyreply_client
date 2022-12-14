export default class Client {
  host = 'https://api.psyreply.com'
  headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('user_token')
  }

  execute(url, init) {
    return new Promise(resolve => {
      fetch(url, init)
        .then(res => resolve(res))
        .catch(err => resolve(err))
    })
  }

  getBlock() {
    return this.execute(`${this.host}/block/user`, {
      method: 'GET',
      headers: this.headers
    })
  }
}
