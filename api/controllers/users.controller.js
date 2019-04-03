import usersDb from "../db/users.db";

class UsersController {
  // Signup Users
  signupUsers(req, res) {
    if (
      !req.body.email ||
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.password
    ) {
      return res.status(404).send({
        success: false,
        message: "email, firstName, lastName, password fields required"
      });
    }

    const user = {
      id: usersDb.length + 1,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      type: "user",
      isAdmin: false
    };

    usersDb.push(user);

    return res.status(200).send({
      success: true,
      message: "user registered successfully",
      user: usersDb[usersDb.length - 1]
    });
  }

  // Signin User
  signinUser(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(404).send({
        success: false,
        message: "email and password required"
      });
    }

    const loginUser = usersDb.find(user => {
      if (
        user.email === req.body.email &&
        user.password === req.body.password
      ) {
        return res.status(200).send({
          success: true,
          message: "user logged in successfully!",
          loginUser: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          }
        });
      } else {
        return res.status(404).send({
          success: false,
          message: "user does not exist!"
        });
      }
    });
  }
}

const usersController = new UsersController();

export default usersController;
