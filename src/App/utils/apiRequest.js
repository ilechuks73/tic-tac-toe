const baseURL = process.env.REACT_APP_API_BASE_URL

export function createRoom(params) {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/createRoom`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        playerName: params.playerName
      }),
    })
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

export function testConnection() {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/testConnection`)
      .then((res) => {
        if(res.status === 200){
          resolve()
        }
        else{
          reject("server not reachable")
        }
      })
      .catch((err) => reject(err))
  })
}

export function requestChechRoom (){
  
}