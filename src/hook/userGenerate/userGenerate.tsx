import { useMemo } from "react";

export function useRandomUser() {
  async function fetchRandomUser() {
    try {
      const response = await fetch("https://randomuser.me/api/?nat=BR");
      const data = await response.json();
      const user = data.results[0];
      return {
        name: `${user.name.first} ${user.name.last}`,
        city: user.location.city,
        state: user.location.state,
      };
    } catch (error) {
      console.error("Error fetching random user:", error);
    }
  }

  return useMemo(
    () => ({
      fetchRandomUser,
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),
    []
  );
}
