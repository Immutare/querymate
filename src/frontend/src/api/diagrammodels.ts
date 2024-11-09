import { ColumnTypeEnum, TailwindColorsEnum } from 'components/diagram/dto/enum';
import { IDatabaseTableMetadata } from 'components/diagram/dto/interfaces/DatabaseTableMetadata';
import type { IFruit } from 'types'

export default async function getFruits(): Promise<IFruit[]> {
	const response = await fetch(
		'https://614c99f03c438c00179faa84.mockapi.io/fruits'
	)
	return response.json() as Promise<IFruit[]>
}

export function mockgetDatabaseDiagramModel() {
    const databaseDiagram: Array<IDatabaseTableMetadata> = [
        {
            tableName: 'dept_manager',
            color: TailwindColorsEnum.RED,
            columns: [
                {
                    name: 'emp_no',
                    type: ColumnTypeEnum.INT,
                    isPrimaryKey: true,
                    isForeignKey: true
                },
                {
                    name: 'dept_no',
                    type: ColumnTypeEnum.CHAR,
                    isPrimaryKey: true,
                    isForeignKey: true
                },
                {
                    name: 'from_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
                {
                    name: 'to_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: false,
                    isForeignKey: false
                }
            ]
        },
        {
            tableName: 'employees',
            color: TailwindColorsEnum.GREEN,
            columns: [
                {
                    name: 'emp_no',
                    type: ColumnTypeEnum.INT,
                    isPrimaryKey: true,
                    isForeignKey: false
                },
                {
                    name: 'birth_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
                {
                    name: 'first_name',
                    type: ColumnTypeEnum.VARCHAR,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
                {
                    name: 'last_name',
                    type: ColumnTypeEnum.VARCHAR,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
                {
                    name: 'gender',
                    type: ColumnTypeEnum.ENUM,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
                {
                    name: 'hire_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
            ]
        },
        {
            tableName: 'titles',
            color: TailwindColorsEnum.PURPLE,
            columns: [
                {
                    name: 'emp_no',
                    type: ColumnTypeEnum.INT,
                    isPrimaryKey: false,
                    isForeignKey: true
                },
                {
                    name: 'title',
                    type: ColumnTypeEnum.VARCHAR,
                    isPrimaryKey: true,
                    isForeignKey: false
                },
                {
                    name: 'from_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: true,
                    isForeignKey: false
                },
                {
                    name: 'to_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
            ]
        },
        {
            tableName: 'departments',
            color: TailwindColorsEnum.FUCHSIA,
            columns: [
                {
                    name: 'dept_no',
                    type: ColumnTypeEnum.INT,
                    isPrimaryKey: true,
                    isForeignKey: false
                },
                {
                    name: 'dept_name',
                    type: ColumnTypeEnum.VARCHAR,
                    isPrimaryKey: false,
                    isForeignKey: false
                }
            ]
        },
        {
            tableName: 'salaries',
            color: TailwindColorsEnum.ROSE,
            columns: [
                {
                    name: 'emp_no',
                    type: ColumnTypeEnum.INT,
                    isPrimaryKey: true,
                    isForeignKey: true
                },
                {
                    name: 'salary',
                    type: ColumnTypeEnum.INT,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
                {
                    name: 'from_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: true,
                    isForeignKey: false
                },
                {
                    name: 'to_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
                {
                    name: 'price',
                    type: ColumnTypeEnum.DECIMAL,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
            ]
        },
        {
            tableName: 'dept_emp',
            color: TailwindColorsEnum.INDIGO,
            columns: [
                {
                    name: 'emp_no',
                    type: ColumnTypeEnum.INT,
                    isPrimaryKey: true,
                    isForeignKey: true
                },
                {
                    name: 'dept_no',
                    type: ColumnTypeEnum.CHAR,
                    isPrimaryKey: true,
                    isForeignKey: true
                },
                {
                    name: 'from_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: false,
                    isForeignKey: false
                },
                {
                    name: 'to_date',
                    type: ColumnTypeEnum.DATE,
                    isPrimaryKey: false,
                    isForeignKey: false
                }
            ]
        },
    ]

    return databaseDiagram;
}

export function getDatabaseDiagramModel(): Promise<any> {
	return fetch('localhost:3000/api/diagrams').catch(() => null);
}
