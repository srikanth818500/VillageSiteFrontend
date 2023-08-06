class AuthenticationService {
    registerSuccessfulLoginBusiness(username) {
      sessionStorage.setItem("authenticatedUser", username);
      sessionStorage.setItem("role", "business");
      console.log("Successful login");
    }
  
    registerSuccessfulLoginUser(username) {
      sessionStorage.setItem("authenticatedUser", username);
      sessionStorage.setItem("role", "user");
      console.log(username);
      console.log("Successful login");
    }
  
    logout() {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload(false);
    }
  
  
  
   
  
  }
  
  export default new AuthenticationService();
  