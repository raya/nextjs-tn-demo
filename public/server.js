// export default function ServerExample({ data }) {
//   const results = data.results;
//
//   return <div>
//     Server side test
//
//     {results.map((result) => <li key={result.name}>{result.name}</li>)}
//   </div>
//
// }
//
// export async function getServerSideProps() {
//   const res = await fetch(`http://swapi.py4e.com/api/people`);
//   const data = await res.json();
//
//   return {
//     props: { data }
//   }
// }
