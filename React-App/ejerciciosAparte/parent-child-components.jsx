


/** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */ 
 
 {me equivoque, habia que poner Header dentro de function Page(){}}

import {createRoot} from "react-dom/client"
const root= createRoot(document.getById("root))


function Header () {
		return (
		<>
		<header>
		
		<img src="react-logo.png" width="20px" alt="React logo"/>
		
		</header
		</>
		)
}

function MainContent (){
	return (
	<main>
	<h1>Reasons I am excited to learn React</h1>
	<ol>
	<li>React is a popular library, so i will be able to fit in
	with all the coolest devs out there!</li>
	<li>I am more likely to get a job as a fornt end developer
	if i know React</li>
	</ol>
	</main>
	)
}

function Footer () {
	return (
	<footer> 
	<small>"@ 20xx Garcia development.All rights reserved"</small>
	</footer>	
	)
	
}

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
	
	
---------------------------


/** Challenge: 
 * Move the `main` element into its own component called "MainContent" 
 * and render that component inside the Page component.
 * 
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
*/