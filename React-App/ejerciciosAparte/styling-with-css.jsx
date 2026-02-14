/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */
 
 ----
 
 /**
 * Challenge:
 * 
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 * 
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 */
 
 -------
 /**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */
 ------------------------
 
 
 
import {createRoot} from "react-dom/client"
import {Header} from "./Header"
import MainContent from "./MainContent.jsx"
import Footer from "./Footer"


const root= createRoot(document.getById("root))


function Page() {
	return(
	<>
	<Header/>
	<MainContent/>
	<Footer/>
	</>
	)
}

root.render (
	<Page/>
	)
	

 
 