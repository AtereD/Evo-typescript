import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../shared/type";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}


function link({
    page,
    selectedPage,
    setSelectedPage
}: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={()=> setSelectedPage(lowerCasePage)}
        className={`${selectedPage === lowerCasePage} ? "text-primary-500" : "" transition duration-500 hover:text-primary-300`}
    >
        {page}
    </AnchorLink>
  )
}

export default link