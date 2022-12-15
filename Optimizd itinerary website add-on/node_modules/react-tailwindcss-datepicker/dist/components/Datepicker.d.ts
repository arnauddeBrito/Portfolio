import React from "react";
interface Props {
    primaryColor?: string;
    value: {
        startDate: string | Date | null;
        endDate: string | Date | null;
    } | null;
    onChange: (value: {
        startDate: string | Date | null;
        endDate: string | Date | null;
    } | null) => void;
    useRange?: boolean;
    showFooter?: boolean;
    showShortcuts?: boolean;
    configs?: {
        shortcuts?: {
            today?: string;
            yesterday?: string;
            past?: (period: number) => string;
            currentMonth?: string;
            pastMonth?: string;
        } | null;
        footer?: {
            cancel?: string;
            apply?: string;
        } | null;
    } | null;
    asSingle?: boolean;
    placeholder?: string;
    separator?: string;
    startFrom?: Date | null;
    i18n?: string;
}
declare const Datepicker: React.FC<Props>;
export default Datepicker;
