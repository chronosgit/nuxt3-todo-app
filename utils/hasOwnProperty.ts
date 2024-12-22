export default function (target: object, key: string | symbol) {
	return Object.prototype.hasOwnProperty.call(target, key);
}
