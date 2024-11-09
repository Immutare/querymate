import { useEffect, type KeyboardEvent, type ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { IFruit } from 'types'
import { useMediaQuery } from 'utils'
import ImageAttribution from './ImageAttribution'

import createEngine, { 
    DefaultLinkModel, 
    DefaultNodeModel,
    DiagramEngine,
    DiagramModel,
	PortModelAlignment
} from '@projectstorm/react-diagrams'

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core'
import { DatabaseNodeModel } from './diagram/widget/DatabaseNodeModel'
import { SimplePortFactory } from './diagram/widget/SimplePortFactory'
import { DatabasePortModel } from './diagram/widget/DatabaseNodePortModel'
import { DatabaseNodeFactory } from './diagram/widget/DatabaseNodeFactory'
import { DUMMY_TABLE, IDatabaseTableMetadata } from './diagram/dto/interfaces/DatabaseTableMetadata'
import { mockgetDatabaseDiagramModel } from 'api/diagrammodels'


const PREFERRED_IMAGE_WIDTH = 384
const MOBILE_PADDING = 16
const ASPECT_RATIO_WIDTH = 16
const ASPECT_RATIO_HEIGHT = 9
const IMAGE_INDEX_BELOW_THE_FOLD = 3



interface Properties {
	fruit: IFruit
	index: number
}

function transformDiagramFromJSONToModel(modelJSON: Array<IDatabaseTableMetadata>): Array<DatabaseNodeModel> {
	const models: Array<DatabaseNodeModel> = [];
	for (let i = 0; i < modelJSON.length; i++) {
		const tableNode = new DatabaseNodeModel(modelJSON[i]);
		tableNode.setPosition(250, 108);

		models.push(tableNode);
	}

	return models;
}

export default function DiagramCanvas(): ReactElement {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)')

	const imageWidth = Math.min(
		PREFERRED_IMAGE_WIDTH,
		window.innerWidth - MOBILE_PADDING
	);
	const imageHeight = imageWidth / (ASPECT_RATIO_WIDTH / ASPECT_RATIO_HEIGHT);

	const [metadata, setMetadata ] = useState<Array<IDatabaseTableMetadata>>([]);
	// const [engine, setEngine] = useState<DiagramEngine>(createEngine());
	// const [model, setModel] = useState<DiagramModel>(new DiagramModel());

	const engine = createEngine();
	engine.getNodeFactories().registerFactory(new DatabaseNodeFactory());
	const model = new DiagramModel();

	engine.setModel(model);

	useEffect(() => {
		const fetchMetadata = async () => {
			setMetadata(mockgetDatabaseDiagramModel())
		}

		fetchMetadata().catch((error) => {
			console.error(error);
		})
	}, []);

	useEffect(() => {
		if (!metadata) {
			return;
		}

		if (!engine) {
			// setEngine(createEngine());
		}

		const nodes =  transformDiagramFromJSONToModel(metadata);
		if (!nodes) {
			return;
		}
		//2) setup the diagram model
		const model = new DiagramModel();

		model.addAll(...nodes);

		//5) load model into engine
		engine.setModel(model);

	}, [metadata]);

	return (
		<CanvasWidget engine={engine} className='w-full'/>
	)
}
