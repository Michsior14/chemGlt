

const utilities = {
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
    }
}

export default utilities;