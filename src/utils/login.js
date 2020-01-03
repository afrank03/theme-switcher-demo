const usersStore = [
  {
    username: "f",
    password: "f",
    details: {
      fullName: "Mr Foo Bob Johnson",
      avatar: "./../assets/logo.png"
    }
  }
];

class Login {
  login(username, password) {
    const user = this._findUser(username, password);
    console.log(user);

    if (!user) throw Error("User not found.");

    return user;
  }

  _findUser(username, password) {
    return usersStore.find(el => el.username === username && el.password === password);
  }
}
export default new Login();
