/**
 * Created by Michal on 22.08.2016.
 */
const classNames = (function () {

	const prepare = function (val) {
		let classes = [];
		if (Array.isArray(val)) {
			for (var v in val) {
				classes = classes.concat(prepare(val[v]));
			}
			return classes;
		} else if (val instanceof Object) {
			for (var k in val) {
				if (val[k]) {
					classes = classes.concat(k.split(" "));
				}
			}
			return classes;
		} else if (typeof val === "string") {
			return val.split(" ");
		}
		return val;
	};

	return function (classes) {
		if (!Array.isArray(classes) && !(classes instanceof Object) && typeof classes !== "string") {
			console.warn("ClassNames - to construct classes dict/array/string is needed");
			return "";
		}
		return prepare(classes).join(" ");
	};
})();

export default classNames;