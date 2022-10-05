
export const getProducts = async ({ token }) => {

  const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/products`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();
  
  return data;

}
