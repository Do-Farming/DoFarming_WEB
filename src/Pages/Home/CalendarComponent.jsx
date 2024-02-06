import { useState } from "react";
import styles from '../style.module.less'
import DaysComponent, { DAY_OF_MONTHS } from "./DaysComponent";
import { classes, formatDate } from '../Utils'


const CalendarComponent: React.FC<ICalendarComponentProps> = ({
    startYear,
    startMonth,
    onSelectDate,
    onClear,
    select,
    setSelect
}) => {
    let today = new Date();

    const [year, setYear] = useState(startYear ? startYear : today.getFullYear());
    const [month, setMonth] = useState(startMonth ? startMonth : today.getMonth() + 1); // 사람이 읽을수 있는 Month


    const onPrevYear = () => {
        setYear(year - 1);
    }

    const onNextYear = () => {
        setYear(year + 1);
    }

    const onPrevMonth = () => {
        let nextYear = year;
        let nextMonth = month - 1;

        if (nextMonth == 0) {
            nextMonth = 12;
            nextYear -= 1;
        }

        setYear(nextYear);
        setMonth(nextMonth);
    }

    const onNextMonth = () => {
        let nextYear = year;
        let nextMonth = month + 1;

        if (nextMonth == 13) {
            nextMonth = 1;
            nextYear += 1;
        }

        setYear(nextYear);
        setMonth(nextMonth);
    }

    const onToday = () => {
        let today = new Date();
        setYear(today.getFullYear());
        setMonth(today.getMonth() + 1);
    }

    // 현재 달 - 1
    let prevYear = year
    let prevMonth = month - 1;

    // 현재 달  + 1
    let nextYear = year;
    let nextMonth = month + 1;

    if (prevMonth == 0) {
        prevYear -= 1;
        prevMonth = 12; // 0 ~ 11 월 까지 있음
    }

    if (nextMonth == 13) {
        nextYear += 1;
        nextMonth = 1; // 0 ~ 11 월 까지 있음
    }

    const onQuickBtn = (type: string) => {
        if (setSelect == undefined)
            return;

        const todayNum = Number(today);
        const dayOfMonth = DAY_OF_MONTHS[today.getMonth()];

        switch (type) {
            case '-1Y':
                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', new Date(todayNum - (1000 * 3600 * 24 * 365))),
                    endDate: formatDate('yyyy-MM-dd', today)
                })
                break;
            case '-6M':
                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', new Date(todayNum - (1000 * 3600 * 24 * 180))),
                    endDate: formatDate('yyyy-MM-dd', today)
                })
                break;
            case '-1M':
                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', new Date(todayNum - (1000 * 3600 * 24 * dayOfMonth))),
                    endDate: formatDate('yyyy-MM-dd', today)
                })
                break;
            case '-1W':
                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', new Date(todayNum - (1000 * 3600 * 24 * 7))),
                    endDate: formatDate('yyyy-MM-dd', today)
                })
                break;
            case '-1D':
                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', new Date(todayNum - (1000 * 3600 * 24))),
                    endDate: formatDate('yyyy-MM-dd', today)
                })
                break;
            case 'D':
                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', today),
                    endDate: formatDate('yyyy-MM-dd', today)
                })
                break;
            case '+1D':
                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', today),
                    endDate: formatDate('yyyy-MM-dd', new Date(todayNum + (1000 * 3600 * 24)))
                })
                break;
            case '+1W':
                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', today),
                    endDate: formatDate('yyyy-MM-dd', new Date(todayNum + (1000 * 3600 * 24 * 7)))
                })
                break;
            case '+1M':

                setSelect({
                    ...select,
                    startDate: formatDate('yyyy-MM-dd', today),
                    endDate: formatDate('yyyy-MM-dd', new Date(todayNum + (1000 * 3600 * 24 * dayOfMonth)))
                })
                break;
        }
    }

    return (
        <div className={styles.CalendarComponent}>
            <div className={styles.Quick}>
                <div className={styles.QuickBtn} onClick={() => onQuickBtn('-6M')}>
                    <p>Last 6 Month</p>
                </div>
                <div className={styles.QuickBtn} onClick={() => onQuickBtn('-1M')}>
                    <p>Last Month</p>
                </div>
                <div className={styles.QuickBtn} onClick={() => onQuickBtn('-1W')}>
                    <p>Last Week</p>
                </div>
                <div className={styles.QuickBtn} onClick={() => onQuickBtn('-1D')}>
                    <p>Yesterday</p>
                </div>
                <div className={styles.QuickBtn} onClick={() => onQuickBtn('D')}>
                    <p>Today</p>
                </div>
                {/* 
                <div className={styles.QuickBtn} onClick={() => onQuickBtn('+1D')}>
                    <p>+1 D</p>
                </div>
                <div className={styles.QuickBtn} onClick={() => onQuickBtn('+1W')}>
                    <p>+1 W</p>
                </div>
                <div className={styles.QuickBtn} onClick={() => onQuickBtn('+1M')}>
                    <p>+1 M</p>
                </div> */}

            </div>
            <div className={styles.Interactions}>
                <div className={styles.BtnGroup}>
                    <div className={styles.Btn} onClick={onPrevYear}>
                        <i className="fi fi-rr-angle-double-small-left"></i>
                    </div>
                    <div className={styles.Btn} onClick={onPrevMonth}>
                        <i className="fi fi-rr-angle-small-left"></i>
                    </div>
                </div>

                <div className={styles.BtnGroup}>
                    <div className={classes(styles.Btn, styles.GoToday)} onClick={onToday}>
                        <p>{`${year}.${month.toString().padStart(2, '0')}`}</p>
                    </div>
                    {
                        onClear ? (
                            <div className={styles.Btn} onClick={onClear}>
                                <i className="fi fi-rr-refresh"></i>
                            </div>
                        ) : null
                    }

                </div>


                <div className={styles.BtnGroup}>
                    <div className={styles.Btn} onClick={onNextMonth}>
                        <i className="fi fi-rr-angle-small-right"></i>
                    </div>
                    <div className={styles.Btn} onClick={onNextYear}>
                        <i className="fi fi-rr-angle-double-small-right"></i>
                    </div>
                </div>


            </div>

            <div className={styles.DayOfTheWeek}>
                <div className={classes(styles.Day, styles.DayOfSun)}>
                    <p>일</p>
                </div>
                <div className={styles.Day}>
                    <p>월</p>
                </div>
                <div className={styles.Day}>
                    <p>화</p>
                </div>
                <div className={styles.Day}>
                    <p>수</p>
                </div>
                <div className={styles.Day}>
                    <p>목</p>
                </div>
                <div className={styles.Day}>
                    <p>금</p>
                </div>
                <div className={classes(styles.Day, styles.DayOfSat)}>
                    <p>토</p>
                </div>
            </div>
            <DaysComponent
                onSelectDate={onSelectDate}
                curMonthFirst={new Date(year, month - 1, 1)}
                prevMonthFirst={new Date(prevYear, prevMonth - 1, 1)}
                nextMonthFirst={new Date(nextYear, nextMonth - 1, 1)}
                select={select}
            />
        </div>
    );
}



export default CalendarComponent;