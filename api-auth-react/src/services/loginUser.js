
export const loginUser = async ({ email, password }) => {

  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/auth/login`,{
    headers:{
      Accept: "application/json",
    },
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  
  return data;

}
