import Link from "next/link"
import { ReactNode } from "react"

interface FilterSectionItemProps {
	item: {content: string, icon: ReactNode, href: string}
}

const FilterSectionItem = ({item}: FilterSectionItemProps) => {
	const {content, icon, href} = item

	return (
		<Link className="filter-section__slide slide-filter" href={href}>
			<span className="slide-filter__icon">{icon}</span>
			<span className="slide-filter__text">{content}</span>
		</Link>
	)
}

export default FilterSectionItem