const costumReject = Promise.reject(new Error("costom failure"))
costumReject.catch(err => console.error(err.message))