import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';
import { DatabasePortModel } from './DatabaseNodePortModel';
import { IDatabaseTableMetadata } from '../dto/interfaces/DatabaseTableMetadata';

export interface DatabaseNodeModelGenerics {
	PORT: DatabasePortModel;
}

export class DatabaseNodeModel extends NodeModel<NodeModelGenerics & DatabaseNodeModelGenerics> {
	tableMetadata?: IDatabaseTableMetadata;
	
	constructor(tableMetadata?: IDatabaseTableMetadata) {
		super({
			type: 'database'
		});


		this.tableMetadata = tableMetadata;
		// this.addPort(new DatabasePortModel(PortModelAlignment.TOP));
		// this.addPort(new DatabasePortModel(PortModelAlignment.LEFT));
		// this.addPort(new DatabasePortModel(PortModelAlignment.BOTTOM));
		// this.addPort(new DatabasePortModel(PortModelAlignment.RIGHT));
	}
}