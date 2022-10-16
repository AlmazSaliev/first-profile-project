// const initialURL = "http://localhost:5000"
  // "proxy": "http://localhost:5000",


function apiFetch({ url, method, body }) {
  const requestOptions = {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (method !== "GET" && body) {
    requestOptions.body = JSON.stringify(body);
  }
  const promise = new Promise((resolve, reject) => {
    fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.message);
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
}

export default apiFetch;
