import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())
const shouldFetch = (`https://api.github.com/users/`)

export function UseGitHubUsers({username}) {
  const { data, error } = useSWR(shouldFetch ? `https://api.github.com/users/${username}`  : null, fetcher)

  
  return (
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>There are an error</h3>}
      {data && !error && (
        <ul>
            <li key={data.login}>{data.login}</li>
        </ul>
      )}
    </div>
  );
}
