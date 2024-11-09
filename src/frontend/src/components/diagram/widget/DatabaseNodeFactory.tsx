import { DatabaseTableNodeWidget } from './DatabaseNodeWidget'
import { DatabaseNodeModel } from './DatabaseNodeModel'
import { AbstractReactFactory } from '@projectstorm/react-canvas-core'
import { DiagramEngine } from '@projectstorm/react-diagrams-core'
import { GenerateModelEvent, GenerateWidgetEvent } from '@projectstorm/react-diagrams'

export class DatabaseNodeFactory extends AbstractReactFactory<
	DatabaseNodeModel,
	DiagramEngine
> {
	constructor() {
		super('database')
	}

	generateReactWidget(event: GenerateWidgetEvent<DatabaseNodeModel>): JSX.Element {
		return (
			<DatabaseTableNodeWidget engine={this.engine} node={event.model}/>
		)
	}

	generateModel(event: GenerateModelEvent) {
		return new DatabaseNodeModel()
	}
}
