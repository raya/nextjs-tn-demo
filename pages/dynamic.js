import dynamic from "next/dynamic";
import {useEffect, useState} from "react";


const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/hello'),
  { loading: () => <p>...</p> }
)

export default function DynamicFunc() {
  let [showComponent, setShowComponent] = useState(false);

  function handleClick() {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <button onClick={handleClick}>Toggle Dynamic Component</button>
      {showComponent ? <DynamicComponentWithCustomLoading /> : 'NO COMPONENT'}
    </div>
  )

}
