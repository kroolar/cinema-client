import React from 'react'
import { Card, Rate } from '../..'

const Ranking = () => {
  const movies = [
    { image: '', rate: 4, title: 'Pulp Fiction' },
    { image: '', rate: 4, title: 'Pulp Fiction' },
    { image: '', rate: 4, title: 'Pulp Fiction' },
    { image: '', rate: 4, title: 'Pulp Fiction' },
    { image: '', rate: 4, title: 'Pulp Fiction' }
  ]

  return (
    <Card>
      <h2 className="text-lg leading-none font-medium mb-4">Best Movies</h2>

      {movies.map(({ rate, title }) => (
        <div className="flex items-center mb-4">
          <div className="mr-4 w-10 h-10 bg-gray-800 rounded"></div>
          <div>
            <div className="leading-none">{title}</div>
            <Rate size="xs" value={rate} />
          </div>
        </div>
      ))}
    </Card>
  )
}
export default Ranking
