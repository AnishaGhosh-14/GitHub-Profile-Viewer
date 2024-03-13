export async function fetchUserData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        console.log(username);//try
        return data;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw new Error('An error occurred while fetching user data');
    }
  }
  