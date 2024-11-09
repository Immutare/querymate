import { useQuery } from '@tanstack/react-query'
import getFruits from 'api/getFruits'
import DiagramCanvas from 'components/DiagramCanvas'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import QueryInput from 'components/QueryInput'
import type { ReactElement } from 'react'

export default function HomePage(): ReactElement {
	const { isPending, isError, error, data } = useQuery({
		queryKey: ['fruits'],
		queryFn: getFruits
	})
	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Querymate' />
			<div className='p-2 flex flex-col h-dvh w-dvw'>
                {/* <div className='bg-black v-1/5'>

                </div>
				<div className='bg-white w-4/5'>
                    
                </div> */}
                <div className='flex flex-auto '>
                    <DiagramCanvas />
                </div>
                <div className='flex h-24 justify-center items-center'>
                    <QueryInput />
                </div>
			</div>
		</>
	)
}
