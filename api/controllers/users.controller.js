import Joi from 'joi';
import usersServices from '../services/users.services';

class UsersController {
  // Signup Users
  async signupUsers(req, res) {
    const schema = {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string()
        .min(5)
        .required(),
      email: Joi.string(),
      type: Joi.string().required(),
      isAdmin: Joi.bool()
    };

    // Validting body request
    const userSignup = Joi.validate(req.body, schema);

    if (userSignup.error) {
      res.status(404).send(userSignup.error.message);
      return;
    }

    // Back from services file
    const signupResult = await usersServices.signupUser(req.body);

    if (signupResult.name === 'error') {
      return res.status(404).json({
        status: 404,
        data: {
          message: signupResult.detail
        }
      });
    }

    if (signupResult.rowCount > 0) {
      return res.status(200).json({
        status: 404,
        data: {
          message: 'Account created Sucessfully',
          user: signupResult.rows[0]
        }
      });
    }
  }

  // Signin User
  async signinUsers(req, res) {
    const schema = {
      email: Joi.string().required(),
      password: Joi.string()
        .min(5)
        .required()
    };

    // Validting body request
    const userSignin = Joi.validate(req.body, schema);
    if (userSignin.error) {
      return res.status(404).send(userSignin.error.message);
    }

    // Back from services file
    const signinResult = await usersServices.signinUser(req.body);

    if (signinResult.rowCount > 0) {
      return res.status(200).json({
        status: 404,
        data: {
          message: 'Login Sucessfull',
          user: signinResult.rows[0]
        }
      });
    }

    if (signinResult.name === undefined) {
      return res.status(404).json({
        status: 404,
        data: {
          message: 'Email or password doesnt match'
        }
      });
    }
  }

  // Get all accounts
  async getAllAccounts(req, res) {
    // Back from services file
    const getAllAccountResult = await usersServices.getAllAccount(
      req.params.user_email_address
    );

    if (getAllAccountResult.rows < 1) {
      return res.status(404).json({
        status: 404,
        data: {
          message: 'user doesnt have an account or user doesnt exist'
        }
      });
    }

    return res.status(200).json({
      status: 200,
      data: {
        message: getAllAccountResult.rows[0]
      }
    });
  }
}

const usersController = new UsersController();

export default usersController;
