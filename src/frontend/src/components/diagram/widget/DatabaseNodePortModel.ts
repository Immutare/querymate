import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

export class DatabasePortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'database',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}