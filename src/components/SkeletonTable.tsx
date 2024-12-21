import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { TableCell, TableRow, TableBody } from "./catalyst/table";
import _ from 'lodash'
import { Dropdown, DropdownButton } from "./catalyst/dropdown";


export function SkeletonCell() {
    return (
        <TableCell className="animate-pulse">
            <div className="h-6 rounded-md bg-gray-200"></div>
        </TableCell>
    )
}


export function SkeletonRow({ columns }: { columns: number }) {
    return (
        <TableRow>
            <SkeletonCell />
            <TableCell>
                <Dropdown>
                    <DropdownButton plain aria-label="More options">
                        <EllipsisVerticalIcon />
                    </DropdownButton>
                </Dropdown>
            </TableCell>
            {_.range(columns - 2).map((c) => (
                <SkeletonCell key={c} />
            ))}
        </TableRow>
    )
}

export function SkeletonTableBody({ columns, rows }: { columns: number, rows: number }) {
    return (
        <TableBody>
            {_.range(rows).map((r) => (
                <SkeletonRow columns={columns} key={r} />
            ))}
        </TableBody>
    );
}