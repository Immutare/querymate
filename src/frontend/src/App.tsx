import LoadingOrError from 'components/LoadingOrError'
import NavbarComponent from 'components/Navbar'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Gallery = lazy(async () => import('pages/Gallery'))
const Home = lazy(async () => import('pages/Home'))
const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	return (
		<>
			<div className="flex flex-row">
				<NavbarComponent />
				<div id="router" className="flex-grow">
					<BrowserRouter>
						<Suspense fallback={<LoadingOrError />}>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path=':fruitName' element={<Details />} />
							</Routes>
						</Suspense>
					</BrowserRouter>
				</div>
			</div>
		</>
	)
}
