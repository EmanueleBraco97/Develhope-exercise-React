import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({ username }) {
  const { data, loading, error } = useGitHubUser(username);

  return (
    <div>
        {loading && <h1>Loading...</h1>}

        {error && <h1>there are error</h1>}
        
        {data && <h1>Id utente è: {data.id}</h1>}
        {data && <h1>Nome utente è: {data.name}</h1>}
        {data && <h1>Nome Login utente è: {data.login}</h1>}
        {data && <h1>Città dell'utente è: {data.location}</h1>}
    </div>
  );
}
