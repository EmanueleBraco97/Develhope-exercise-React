import { UseGitHubUsers } from "./UseGitHubUsers";

export function GitHubUser({ username }) {
  const { data, error, isLoading } = UseGitHubUsers(username);
  
  
  return(
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>There are an Error</h2>}
      {data && <h2>{data.name}</h2>}
    </div>   
  )   
}
   

