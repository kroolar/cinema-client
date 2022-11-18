import { Card, Rate } from '../..'

const Header = () => {
  const movie = {
    image: '',
    title: 'Pulp Fiction',
    rate: 4,
    description: `Lorem ipsum – tekst składający się z łacińskich i
      quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie, wzorowany
      na fragmencie traktatu Cycerona „O granicach dobra i zła” napisanego w 45
      p.n.e. Tekst jest stosowany do demonstracji krojów pisma, kompozycji
      kolumny itp.`
  }

  return (
    <Card className="flex flex-row mb-10 h-64">
      <div className="w-40 h-40 bg-gray-800 rounded mr-10" />

      <div className="flex-1">
        <div className="leading-none text-4xl font-semibold mb-2">
          {movie.title}
        </div>

        <Rate size="sm" className="-ml-1" value={movie.rate} />

        <div className="font-light mt-4 text-justify">
          {movie.description}
        </div>
      </div>
    </Card>
  )
}

export default Header
