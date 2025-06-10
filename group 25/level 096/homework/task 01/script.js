function yourAge (birthday) {
    const today = new Date()
    const birthdayDate = new Date(birthday)
    const todays = {
        "year": today.getFullYear(),
        "Month" : today.getMonth(),
        "Day": today.getDate()
    }
    const birthdays = {
        "year": birthdayDate.getFullYear(),
        "Month" : birthdayDate.getMonth()+1,
        "Day": birthdayDate.getDate()
    }
    console.log(birthdayDate)
    console.log(todays)
    console.log(birthdays)
}
yourAge("2000-03-11")