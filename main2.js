// Hàm random số từ 0-10
function getRandomNumber() {
    return Math.floor(Math.random() * 11);
}

// Định nghĩa đối tượng student
const student = {
    name: "Nguyễn Văn A",
    age: 20,
    score1: 8,
    score2: 9
};

// Hàm tạo Promise
function getStudentPromise(delay) {
    return new Promise((resolve, reject) => {
        let randomNumber = getRandomNumber();
        console.log(`Số random (${delay}s): `, randomNumber);

        setTimeout(() => {
            if (randomNumber % 2 === 0) {
                resolve({ ...student, delay }); // Trả về student cùng thời gian delay
            } else {
                reject("Dữ liệu lỗi");
            }
        }, delay * 1000);
    });
}

// Tạo hai promise
const promise1 = getStudentPromise(2); // Chờ 2s
const promise2 = getStudentPromise(4); // Chờ 4s

// Thực thi Promise.all
Promise.all([promise1, promise2])
    .then((results) => {
        console.log("Lấy dữ liệu hoàn thành:", results);
    })
    .catch((error) => {
        console.log("Promise.all lỗi:", error);
    });

// Thực thi Promise.race
Promise.race([promise1, promise2])
    .then((result) => {
        console.log("Đã lấy được dữ liệu:", result);
    })
    .catch((error) => {
        console.log("Promise.race lỗi:", error);
    });
