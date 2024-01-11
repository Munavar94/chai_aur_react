// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData();
    console.log('useLoaderData', data);

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log('result', result);
    //             setData(result);
    //         })
    // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}

        <img src={data.avatar_url} alt="Git Picture" width={300} 
            className="flex justify-center"/>
    </div>
  )
}

export default Github;


// Create New File for this function:
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();     // convert string to json
}
