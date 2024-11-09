import { useState, type ReactElement } from 'react'
import { FloatingLabel } from "flowbite-react";
import { Button } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";

interface Properties {
	
}


export default function QueryInput(): ReactElement {

    const [isLoading, setIsLoading ] = useState(false)
    const onClickHandler = (event: any) => {
        event.preventDefault()
        event.stopPropagation()
        setIsLoading(!isLoading)
    }

	return (
		<div className='flex flex-row'>
			<FloatingLabel
            variant="filled"
            label="Floating Helper"
            helperText="Remember, contributions to this topic should follow our Community Guidelines."
            />
            <Button 
                size="md" 
                isProcessing={isLoading}
                processingSpinner={isLoading ? <AiOutlineLoading className="h-6 w-6 animate-spin" /> : null}
                onClick={onClickHandler}>
                Click me!
            </Button>
		</div>
	)
}
