import { useServer } from 'next/server';

export default function Page() {
  const serverData = useServer(() => {
    // This function might run on the server side to fetch or compute data
    return fetchSomeDataFromDatabase();
  });

  return <div>{serverData}</div>;
}
  // }




  // function MyComponent() {
  //   const serverData = useServer(() => {
  //     // This function might run on the server side to fetch or compute data
  //     return fetchSomeDataFromDatabase();
  //   });

  //   return <div>{serverData}</div>;
  // }

  // export default MyComponent;