import { useQuery } from "@tanstack/react-query"
import getFruits from "api/getFruits"
import Head from "components/Head"
import LoadingOrError from "components/LoadingOrError"
import { ReactElement } from "react"

export default function DiagramPage(): ReactElement {
	const { isPending, isError, error, data } = useQuery({
		queryKey: ['fruits'],
		queryFn: getFruits
	})
	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Vitamin' />
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				
			</div>
		</>
	)
}
