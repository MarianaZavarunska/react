import { userService } from "./user-service";

userService.getAll().then(response => response.data).then(users => {
    for (const user of users) {
        console.log(user.name);
        
    }
})