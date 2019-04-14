import usersDb from '../db/users.db';

class UsersController {
  // Signup Users
  signupUsers(req, res) {
    if (
      !req.body.email
      || !req.body.firstName
      || !req.body.lastName
      || !req.body.password
    ) {
      return res.status(404).json({
        status: 404,
        error: {
          message: 'email, firstName, lastName, password fields required',
        },
      });
    }

    const user = {
      id: usersDb.length + 1,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      type: 'user',
      isAdmin: false,
    };

    usersDb.push(user);

    return res.status(200).json({
      status: 200,
      data: {
        message: 'user registered successfully',
        user: usersDb[usersDb.length - 1],
      },
    });
  }

  // Signin User
  signinUser(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(404).json({
        status: 404,
        error: {
          message: 'email and password required',
        },
      });
    }

    if (usersDb.length === 0) {
      return res.status(404).json({
        status: 404,
        error: {
          message: 'database is empty, Create an account',
        },
      });
    }

    return usersDb.find((user) => {
      if (
        user.email === req.body.email
        && user.password === req.body.password
      ) {
        return res.status(200).send({
          status: 200,
          data: {
            message: 'user logged in successfully!',
            loginUser: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            },
          },
        });
      }
      return res.status(404).json({
        status: 404,
        error: {
          message: 'user does not exist!',
        },
      });
    });
  }
}

const usersController = new UsersController();

export default usersController;
