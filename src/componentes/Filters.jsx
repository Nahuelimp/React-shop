import { useId, useState } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"
function Filters() {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const CategoryFilterId = useId()



    const handleMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }


    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input type="range" id={minPriceFilterId} min="0" max="1000" onChange={handleMinPrice} value={filters.minPrice} />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={CategoryFilterId}>category</label>
                <select id={CategoryFilterId} onChange={handleCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">laptos</option>
                    <option value="smartphones">telefonos</option>
                </select>
            </div>
        </section>

    )
}

export default Filters