
export const registerUser = async ({ displayName, email, password, password_confirmation }) => {

  const formData = new FormData();
  formData.append('name', displayName);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('password_confirmation', password_confirmation);

  const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/auth/register`,{
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  return data;

}
