import { ColumnTypeEnum, TailwindColorsEnum } from "../enum";

export interface IDatabaseCellMetadata {
	name: string;
	type: ColumnTypeEnum;
	isPrimaryKey: boolean;
	isForeignKey: boolean;
}

export interface IDatabaseTableMetadata {
	tableName: string;
	color: TailwindColorsEnum;
	columns: Array<IDatabaseCellMetadata>;
}

export const DUMMY_TABLE: IDatabaseTableMetadata = {
    color: TailwindColorsEnum.EMERALD,
    tableName: 'salaries',
    columns: [
        {
            name: 'emp_no',
            isForeignKey: false,
            isPrimaryKey: true,
            type: ColumnTypeEnum.INT
        },
        {
            name: 'salary',
            isForeignKey: false,
            isPrimaryKey: false,
            type: ColumnTypeEnum.INT
        },
        {
            name: 'from_date',
            isForeignKey: false,
            isPrimaryKey: false,
            type: ColumnTypeEnum.DATE
        },
        {
            name: 'to_date',
            isForeignKey: false,
            isPrimaryKey: false,
            type: ColumnTypeEnum.DATE
        },
        {
            name: 'price',
            isForeignKey: false,
            isPrimaryKey: false,
            type: ColumnTypeEnum.DECIMAL
        }
    ]
};
