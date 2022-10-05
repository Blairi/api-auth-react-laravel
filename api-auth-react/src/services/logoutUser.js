
export const logoutUser = async ({ token }) => {

  const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/auth/logout`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    method: 'POST'
  });

  const data = await response.json();
  
  return data;

}
