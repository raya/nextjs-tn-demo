import {useEffect} from "react";

export default function WindowExample() {
  // console.log(window);

  useEffect(() => {
    console.log(window);
  }, [])

  return (<div>Window example</div>);
}
