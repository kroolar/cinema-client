import React, { useEffect, useState } from 'react'
import { Card, Icon, Label, Input, Select, Button, Table } from '../../..'
// import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client'
import { gql, useMutation, useQuery } from '@apollo/client'

const Movies = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [year, setYear] = useState('')

  const GET_MOVIES = gql`
    {
      movies {
        id
        category
        title
        year
      }
    }
  `

  const GET_CATEGORIES = gql`{ movieCategories }`
  const GET_YEARS = gql`{ movieYears }`

  const REMOVE_MOVIE = gql`
    mutation RemoveMovie($id: ID!) {
      removeMovie(id: $id){
        title
      }
    }
  `

  const CREATE_MOVIE = gql`
    mutation CreateMovie(
      $title: String!
      $year: Int!
      $category: String!
    ) {
      createMovie(
        title: $title
        year: $year
        category: $category
      ) {
        id
      }
    }
  `

  const { loading:moviesLoading, data:movies, refetch } = useQuery(GET_MOVIES)
  const { loading:categoriesLoading, data:categories } = useQuery(GET_CATEGORIES)
  const { loading:yearsLoading, data:years } = useQuery(GET_YEARS)
  const [removeMovie] = useMutation(REMOVE_MOVIE)
  const [createMovie] = useMutation(CREATE_MOVIE)
  
  if (moviesLoading) return null
  if (categoriesLoading) return null
  if (yearsLoading) return null

  const actions = (id) => (
    <div className="flex items-center justify-end">
      <Icon size="2xs" type="edit" />
      <Icon
        className="mx-1"
        onClick={() => {
          removeMovie({ variables: { id }})
          refetch()
        }}
        size="2xs"
        type="delete"
      />
    </div>
  )

  const rows = movies.movies.map(({ title, category, year, id }) => (
    [title, category, year, actions(id)]
  ))

  return (
    <div className="flex items-start">
      <Card className="flex-col h-full mr-10 w-2/3">
        <Table
          headers={['Title', 'Category', 'Year', '']}
          rows={rows}
        />
      </Card>

      <Card className="w-1/3">
        <div className="flex flex-col mb-2">
          <Label required text="Name" />
          <Input value={name} onChange={e => setName(e.target.value)} />
        </div>
        
        <div className="mb-2">
          <Label required text="Category" />
          <Select
            options={categories.movieCategories.map(c => ({ label: c, value: c }))}
            onChange={e => setCategory(e.value)}
            value={categories.movieCategories.find(c => c === category)}
          />
        </div>

        <div className="mb-2">
          <Label required text="Year" />
          <Select
            options={years.movieYears.map(y => ({ label: y, value: y }))}
            onChange={e => setYear(e.value)}
            value={years.movieYears.find(y => y === year)}
          />
        </div>

        <Button
          className="w-full"
          text="Create"
          onClick={() => {
            createMovie({ variables: { title: name, year: (year * 1), category }})
            refetch()
          }}
        />
      </Card>
    </div>
  )
}

export default Movies
