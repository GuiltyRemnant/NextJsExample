'use client'
import useSWR from 'swr'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())


const ListItems: React.FC = () => {
  const { data, error } = useSWR('https://gorest.co.in/public/v2/users', fetcher)


  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const listItems = data.map((item: any) =>
    <li key={item.id}>{item.id}</li>
  );


  return (

<ul>{listItems}</ul>

  )
}

export default ListItems
