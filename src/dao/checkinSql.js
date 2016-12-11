let checkInSql = {
	insert:'INSERT INTO check_in_posts (postId, studentId, badStudent, time, courseName, isDeleted) VALUES (null,?,?,?,?,0)',
	findAll:'select * from check_in_posts where studentId = (select studentId from students where classId =?) order by ? limit ?,?',
	delete:'update check_in_posts SET isDeleted = 1 where postId = ?'
};

module.exports = checkInSql;