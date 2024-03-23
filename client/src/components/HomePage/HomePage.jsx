import { useEffect, useState } from 'react'
import { NavBar } from '../NavBar/NavBar.jsx'
import { Pagination } from '../Pagination/Pagination.jsx'
import { PokemonPreview } from '../PokemonPreview/PokemonPreview.jsx'
import axios from 'axios'

export const HomePage = () => {
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const limit = 20

  useEffect(() => {
    axios.get(`http://localhost:8080/api/pokemon?page=${page}&limit=${limit}&search=${searchTerm}`)
      .then(response => {
        setPokemon(response.data.result)
        setTotalPages(Math.ceil(response.data.total / limit)) // calculate total pages
      })
      .catch(error => console.error('Error:', error))
  }, [page, searchTerm])

  const nextPage = () => setPage(page + 1)
  const prevPage = () => setPage(page > 1 ? page - 1 : 1)

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} />
      <main className='mt-10 flex flex-col gap-y-8 items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5 xl:justify-between mx-auto justify-items-center'>
        {pokemon.map((poke, index) => (
          <PokemonPreview key={index} data={poke} />
        ))}
      </main>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        handlePrevPage={prevPage}
        handleNextPage={nextPage}
      />
    </>
  )
}
