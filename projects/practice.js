// Practice Challenges:

    // 1 -- Write a program that checks if a person can drive:
        // They must be aged at least 18 AND have a valid license.
        // Answer 1 - 
        let age = 11;
        let license = 'valid';

        if (age >=18 && license === 'valid') {
            console.log('Hey, you can drive.');
        } else {
            console.log('Sorry, you can not drive.');
        }

        // Answer 2 --
        function canDrive(minAge, hasLicense) {
            if (minAge >= 18 && hasLicense) {
                console.log('You can drive.');
            } else {
                console.log('Sorry, you can not drive!');
            }
        }

        canDrive(25, true);


    // 2 -- Show a welcome message if it’s the weekend OR a holiday.
    let weekEnd = false;
    let holiDay = false;

    if (weekEnd || holiDay) {
        console.log('Hey, lets have a party!');
    } else {
        console.log('Oops..we have to work!');
    }

    // 3 -- Display “logged out” if a user is NOT logged in.

    isLogged = false;

    if (isLogged) {
        console.log('U just logged in - pls continue');
    } else {
        console.log('Logged out')
    }

