export const displayDate = (date: Date) => {
    const today = new Date();

    const mn = date.getMinutes();
    const hh = date.getHours();
    const dd = date.getDate();
    const mm = date.getMonth();
    const yyyy = date.getFullYear();

    if (today.getFullYear() === yyyy) {
        if (today.getDate() === dd) {
            return [hh, mn].join(":");
        } else {
            return [dd, mm].join("/") + "-" + [hh, mn].join(":");
        }
    } else {
        return [dd, mm, yyyy].join("/") + "-" + [hh, mn].join(":");
    }
};
