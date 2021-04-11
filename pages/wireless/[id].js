import { useRouter } from "next/router";

export default function Phone({ phone }) {
  const router = useRouter();
  const id = router.query.id;
  console.log('router:', router);

  return <div>
    Individual post for {id}
  </div>
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://swapi.py4e.com/api/people/');
  const data = await res.json();

  console.log('params:', params);

  const result = data.results.find((item) => {
    return item.name.split(' ').join('_').toLowerCase() === params.id;
  });

  console.log('phone:', result);

  return {
    props: {
      phone: result
    }
  }


}

// get the path id
export async function getStaticPaths() {
  const res = await fetch('http://swapi.py4e.com/api/people/');
  const data = await res.json();

  const paths = data.results.map((item) => {
    return {
      params: { id: item.name.split(' ').join('_').toLowerCase() }
    }
  });

  console.log('paths:', paths);
  return {
      paths,
      fallback: false
  }

}
