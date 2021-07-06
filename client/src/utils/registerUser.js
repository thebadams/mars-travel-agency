import axios from 'axios';

const registerUser = async () => {
  try {
    const user = await axios.post('/auth/local/register', {
    username: "bpeteradams",
    email: "bpeteradams@gmail.com",
    password: "password"

  })
  console.log(user)
  } catch (error) {
    console.log(error)
  }
  
}

export default registerUser;
