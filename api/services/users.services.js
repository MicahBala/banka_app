import pool from '../services/db_connect';

class UsersServices {
  async signupUser(userSignupDatails) {
    const {
      firstName,
      lastName,
      email,
      password,
      type,
      isAdmin
    } = userSignupDatails;

    const insertQuery =
      'INSERT INTO banka_users (first_name, last_name, email, user_password, type_of_user, isAdmin) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';

    const signupValues = [firstName, lastName, email, password, type, isAdmin];
    let signupQueryResult;
    try {
      signupQueryResult = await pool.query(insertQuery, signupValues);
    } catch (error) {
      return error;
    }
    return signupQueryResult;
  }

  async signinUser(userSigninDatails) {
    const { email, password } = userSigninDatails;

    const findQuery =
      'SELECT * FROM banka_users WHERE email = $1 AND user_password = $2';
    const signinValues = [email, password];
    let signinQueryResult;
    try {
      signinQueryResult = await pool.query(findQuery, signinValues);
    } catch (error) {
      return error;
    }
    // console.log(signinQueryResult.rows[0]);

    return signinQueryResult;
  }
}

const usersServices = new UsersServices();

export default usersServices;
