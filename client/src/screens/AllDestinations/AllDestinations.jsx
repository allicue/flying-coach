import React from 'react';
import Destination from '../../components/Destination/Destination';
import Search from '../../components/Search/Search';
import './AllDestinations.css'

function AllDestinations(props) {

  const handleSearch = e => {
    const newQueriedDestinations = props.destinations.filter(country => country.country_name.toLowerCase().includes(e.target.value.toLowerCase()))
   props.setQueriedDestinations(newQueriedDestinations)
  }
  const handleSubmit = e => e.preventDefault()

  const destinationJSX = props.queriedDestinations.map((destination) =>
    <Destination id={destination.id} country_name={destination.country_name} hero_img={destination.hero_img} price={destination.price}/>
)

  return (
    <div className='all-destinations'>

      <section className='hero-img destinations-hero-img'>
        <h3 className='country-title'>Destinations</h3>
      </section>
      
      <Search onSubmit={handleSubmit} onChange={handleSearch}></Search>

      <section className='destinations-container'>

        {destinationJSX}

        </section>
    </div>
  );
}

export default AllDestinations;