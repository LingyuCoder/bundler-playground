/** @type {import("@rspack/core").LoaderDefinition} */
module.exports = function () {
	var err = new Error("Message");
	err.stack = "Stack";
	//@ts-expect-error hideStack is not a property on normal errors
	// err.hideStack = true;
	const error = new Error("asdfasdf");
	error.stack = "Stack2";
	// error.hideStack = true;
	this.emitError(error);
	throw err;
};
