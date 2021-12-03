function LogIn() {
  return (
    <div>
      <div class="login">
        <h1>Login</h1>
        <form method="post">
          <input
            type="text"
            name="student_ID"
            placeholder="student_ID"
            required="required"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required="required"
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
export default LogIn;
