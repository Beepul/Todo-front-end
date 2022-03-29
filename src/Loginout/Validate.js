const validate = (values) =>{
  
    const errors={};
    if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      
      if(!values.phonenumber){
        errors.phonenumber="Phone number is required";
      }else if(!/^\d{10}$/i.test(values.phonenumber)){
        errors.phonenumber="Phone number must be 10 digits";
      }
  
      if(!values.password){
        errors.password="Password is required";
     }else if(values.password.length < 5){
       errors.password ="Password must be more than 5";
     }
      if(!values.confirmpassword){
        errors.confirmpassword="Field empty";
      }else if(values.confirmpassword.length<5){
        errors.confirmpassword="Password must be more than 6";
      }else if(values.confirmpassword !== values.password){
        errors.confirmpassword="Password doesnot match";
      }
      if (!values.firstname) {
        errors.firstname = "First Name is required";
      }
      if (!values.lastname) {
        errors.lastname = "Last Name is required";
      }
      return errors;
};

export default validate;