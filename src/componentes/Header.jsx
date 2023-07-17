import Filters from "./Filters"
import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <h1>React Shop</h1>
            <Filters />
        </header>
    )
}
