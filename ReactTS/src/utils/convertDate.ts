export const getDateObject = (date_01: Date) => {
	let date = date_01 || "";
	let date_02: Date = new Date(date);
	let newDate = {
		day: "",
		month: "",
		year: "",
	};
	const replaceNaN = (str: string) => {
		if (str === "NaN") {
			return "";
		}
		if (parseFloat(str) < 10) {
			str = `0${str}`;
		}
		return str;
	};
	if (date_02) {
		let day = replaceNaN(`${date_02?.getDate?.()}`);
		let month = replaceNaN(`${1 + date_02?.getMonth?.()}`);
		let year = replaceNaN(`${date_02?.getFullYear?.()}`);
		newDate = {
			day: day,
			month: month,
			year: year,
		};
	}
	return newDate;
};

export const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const getMonthDate = (date_01: Date) => {
	let month: string = "";
	let date: string = "";
    for (let i = 0; i < monthsFull.length; i++) {
		let element = monthsFull[i];
		if (date_01?.getMonth() === (i)) {
			month = element;
		}
	}
	date = `${month} ${date_01.getFullYear()}`
	if (isNaN(date_01.getFullYear()) === true) {
		return null;
	} else {
		return date;
	}
}