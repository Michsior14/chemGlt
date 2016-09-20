

const utilities = {
<<<<<<< HEAD
				manageAsyncTasks: (dataArray, asyncFunc, callback) => {
					let counter = 0;
					let resultArray = new Array(dataArray.length);

					dataArray.forEach((item, idx) => {
						asyncFunc(item, idx, ( result ) => {
							resultArray[idx] = result;
							counter += 1;

							if (counter === dataArray.length){
								callback(resultArray);
                }
            });

        });

    },
	getNow: () => {
		return new Date(Date.now()).toLocaleString();
    },
	randomColor: () => {
		return "rgba(" + 
		Math.floor(Math.random() * 255) + ", " + 
		Math.floor(Math.random() * 255) + ", " + 
		Math.floor(Math.random() * 255) + ", 1)";
    }
=======
	manageAsyncTasks: (dataArray, asyncFunc, callback) => {
		let counter = 0;
		let resultArray = new Array(dataArray.length);

		dataArray.forEach((item, idx) => {
			asyncFunc(item, idx, (result) => {
				resultArray[idx] = result;
				counter += 1;

				if (counter === dataArray.length) {
					callback(resultArray);
				}
			});
		});
	},
	getNow: () => {
		return new Date(Date.now()).toLocaleString();
	},
	randomColor: () => {
		return "rgba(" +
			Math.floor(Math.random() * 255) + ", " +
			Math.floor(Math.random() * 255) + ", " +
			Math.floor(Math.random() * 255) + ", 1)";
	}
>>>>>>> 0569b60c6726b16e70decd04756d3789e57f0799
};

export default utilities;