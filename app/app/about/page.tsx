export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>About</div>;
}
