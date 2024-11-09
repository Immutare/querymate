import * as React from 'react';
import { DatabaseNodeModel } from './DatabaseNodeModel';
import { DiagramEngine, PortModelAlignment, PortWidget } from '@projectstorm/react-diagrams';
import { FaKey } from "react-icons/fa";
import styled from '@emotion/styled';
import { IDatabaseTableMetadata } from '../dto/interfaces/DatabaseTableMetadata';

export interface DatabaseNodeWidgetProps {
	node: DatabaseNodeModel;
	engine: DiagramEngine;
	size?: number;
}


namespace S {
	export const Port = styled.div`
		width: 16px;
		height: 16px;
		z-index: 10;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 8px;
		cursor: pointer;

		&:hover {
			background: rgba(0, 0, 0, 1);
		}
	`;


	export interface DatabaseNodeWidgetProps {
		node: DatabaseNodeModel;
		engine: DiagramEngine;
		size?: number;
	}}


export class DatabaseTableNodeWidget extends React.Component<DatabaseNodeWidgetProps> {	
	render() {
		
		const { color = '', columns = [], tableName = '' } = this.props.node.tableMetadata!;
		if (!color || !columns || !tableName) {
			throw new Error('Not enough data');
		}

		return (
			<div
				className={'flex'}
				style={{
					position: 'relative'
				}}
			>
				<div className='border-2 border-slate-500 rounded-md bg-white'> {/** Table */}
					<div className='table-header text-center'>
						<div className={`bg-${color}-500 grow h-2`}></div>
						<p className='font-semibold'>{tableName}</p>
					</div>
					<div className='table-body flex flex-row'>
						<div className='divide-y divide-slate-200'> {/**Columns */}
							{
								columns.map((column) => {
									return (
										<div className='flex flex-column flex-nowrap p-1' key={column.name}>
											<div className={`is-primary flex flex-column justify-center items-center pr-1 ${column.isPrimaryKey ? '' : 'opacity-0'}`}> <FaKey /> </div>
											<p className='grow pr-8'>{column.name}</p>
											<div className='grow-0 datatype'>{column.type}</div>
										</div>
									);
								})
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
