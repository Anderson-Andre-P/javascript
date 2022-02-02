const url = "http://localhost:5500/api";

const newUser = {
  name: "Anderson André",
  avatar:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FPopeye-2021-Calendar-Features-Hearst%2Fdp%2F0789338777&psig=AOvVaw1uHw7ysUzc9cRtx6QAzxe9&ust=1643896001569000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDByv2T4fUCFQAAAAAdAAAAABAD",
  city: "Minas Gerais",
};

const userUpdate = {
  name: "Frajola",
  avatar: "http://lorempixel.com/400/200/",
  city: "Recife",
};

function getUser() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

// getUser();

function addNewUser() {
  axios
    .post(url, newUser)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// addNewUser();

function updateUser() {
  axios
    .put(`${url}/2`, userUpdate)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// updateUser();

function deleteUser() {
  axios
    .delete(`${url}/3`)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// deleteUser();

function getOneUser() {
  axios
    .get(`${url}/2`)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

getOneUser();
