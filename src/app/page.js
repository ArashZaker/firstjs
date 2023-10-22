import { promises as fs } from 'fs';
import NavBar from './NavBar';

export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/public/assets/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <main >
      <NavBar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>hello world!</h1>
        {
          data.map((item, index) => (
            <h6 key={index}>{item.country}</h6>
          ))
        }
      </div>
    </main>
  )
}
