// Nguyễn Nhất Duy - 2180604811
// Khai báo kiểu dữ liệu Student
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

    // Phương thức tính điểm trung bình
    getAverage() {
        return (this.score1 + this.score2) / 2;
    }

    // Phương thức xếp loại
    getRank() {
        let avg = this.getAverage();
        if (avg >= 8) return "Giỏi";
        if (avg >= 6.5) return "Khá";
        if (avg >= 5) return "Trung bình";
        return "Yếu";
    }
}

// Tạo mảng gồm 4 sinh viên
const students = [
    new Student("Nguyễn Nhất Duy", 19, 8, 9),
    new Student("Nguyễn Trương Tuấn Kiệt", 20, 8, 8.5),
    new Student("Trương Ngọc Thanh Phong", 17, 8, 7),
    new Student("Nguyễn Lâm Trắng Kiệt", 18, 5, 10)
];

// 1. Sử dụng map để in ra xếp loại của từng sinh viên
console.log("Xếp loại của từng sinh viên:");
students.map(student => {
    console.log(`${student.name}: ${student.getRank()}`);
});

// 2. Sử dụng reduce để tính TBC điểm của cả lớp
const averageClassScore = students.reduce((sum, student) => sum + student.getAverage(), 0) / students.length;
console.log(`Điểm trung bình của lớp: ${averageClassScore.toFixed(2)}`);

// 3. Sử dụng some để kiểm tra có sinh viên nào dưới 18 không
const hasUnderageStudent = students.some(student => student.age < 18);
console.log(`Có sinh viên nào dưới 18 tuổi không? ${hasUnderageStudent ? "Có" : "Không"}`);

// 4. Sử dụng every để kiểm tra cả lớp có đầy đủ tên không
const allHaveNames = students.every(student => student.name.trim().length > 0);
console.log(`Cả lớp có đầy đủ tên không? ${allHaveNames ? "Có" : "Không"}`);
