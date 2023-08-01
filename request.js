function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

async function showUserName(id) {
  try {
    const user = await getUser(id);
    console.log(`O nome do usuário é: ${user.data.first_name}`);
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

showUserName(1);
