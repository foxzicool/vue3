import { ref } from 'vue';

export default function useJwt() {
  // Initialize token from localStorage if available
  const token = ref(localStorage.getItem('jwt') || null);

  // Set a new token value and update localStorage
  const setToken = (newToken) => {
    token.value = newToken;
    localStorage.setItem('jwt', newToken);
  };

  // Get the current token value
  // Refresh from localStorage if needed
  const getToken = () => {
    if (!token.value) {
      token.value = localStorage.getItem('jwt');
    }
    return token.value;
  };

  // Placeholder function for decoding the token if needed in the future
  const decodeToken = () => {
    // TODO: Add logic to decode the token if necessary
  };

  // Remove the token and clear from localStorage
  const removeToken = () => {
    token.value = null;
    localStorage.removeItem('jwt');
  };

  return {
    setToken,
    getToken,
    decodeToken,
    removeToken,
  };
}
