import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
} from '@heroicons/react/24/outline';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
};

export function ErrorBox({ errorMessage }: { errorMessage?: string | FetchBaseQueryError | SerializedError }) {
    if (errorMessage) {
        return <div className='bg-red-600 text-white p-2'>{String(errorMessage)}</div>
    }
    return undefined
}