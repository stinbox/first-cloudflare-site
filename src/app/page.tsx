export default async function Home() {
  const usernames = ["y-hiraoka", "rauchg", "chibicode"];
  const username = usernames[Math.floor(Math.random() * usernames.length)];
  const user = await fetch(`https://api.github.com/users/${username}`).then(
    (res) => res.json()
  );

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
