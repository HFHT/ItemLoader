// Return current date in DB format
export const dateDB = () => {
    const theDate = new Date;
    return theDate.toISOString().substring(0, 10);
};

// Return the provided date in a yyyy-mm-dd format
export const dateFormat = (date: any) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
