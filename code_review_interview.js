// 1.

let alert = "User authentication failed";
console.log(alert);

// 2.

const foo = (x, y) => {
    if (x === y) {
        return true
    else:
        return false
    }
}

// 3.
import './a.js';
import './b.js';

// 4.
const data = [1, 2, 3, 4, 5];
const result = data
  .map(x => x % 2 === 0 ? x * 2 : x * 3)
  .filter(x => x > 10 ? x < 20 : x > 5)
  .reduce((acc, x) => x > 10 ? (x > 15 ? acc + x : acc + x * 2) : acc, 0);

console.log(result === (2*2 + 3*3 + 4*2*2) ? "True!" : "False!");

// 5. 

function createUser(username, password, email, firstName, lastName, dateOfBirth, address, phoneNumber, profilePictureURL, accountType, preferences) {
    // Create user with a lot more details now
}

// 6. 
function p(q, r) {
    return q * r;
}

function s(t) {
    return t + 10;
}

let a = 5;
let b = 3;
let c = p(a, b);
let d = s(c);

console.log(d);

// 7.
// check greeting.html

// 8.

import * as StringUtils from './stringUtils.js';
import * as ArrayUtils from './arrayUtils.js';

filter()

// 9.

const numbers = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 5) {
        numbers.splice(i, 1);
    }
}

console.log(numbers);

// 10.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayUserInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    saveToLocalStorage() {
        const userData = {
            name: this.name,
            age: this.age
        };
        localStorage.setItem('userInfo', JSON.stringify(userData));
    }

    loadFromLocalStorage() {
        const userData = JSON.parse(localStorage.getItem('userInfo'));
        if (userData) {
            this.name = userData.name;
            this.age = userData.age;
        }
    }
}

const user1 = new User('John', 30);
user1.displayUserInfo();
user1.saveToLocalStorage();

// 11. 
// check parent.vue & child.vue

// 12.

const fetchUserData = async (userId) => {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    console.log(data.name);
};

fetchUserData(123);

// 13.

const userData = {
    id: 123,
    profile: {
        name: 'John Doe',
        address: {
            street: '123 Main St',
            city: 'Springfield'
        }
    }
};

let userStreet;
if (userData && userData.profile && userData.profile.address && userData.profile.address.street) {
    userStreet = userData.profile.address.street;
} else {
    userStreet = "N/A";
}

console.log(userStreet);  // Outputs: "123 Main St"

// 14.

const database = {
    read: function(id, callback) { ... },
    process: function(data, callback) { ... },
    save: function(data, callback) { ... },
}

database.read(1, (err, data) => {
    if (err) {
        console.error("Read Error:", err);
    } else {
        database.process(data, (err, processedData) => {
            if (err) {
                console.error("Process Error:", err);
            } else {
                database.save(processedData, (err, result) => {
                    if (err) {
                        console.error("Save Error:", err);
                    } else {
                        console.log(result);
                    }
                });
            }
        });
    }
});

// 15.

// Hypothetical asynchronous API fetch function
const fetchUser = (userId, callback) => {
    setTimeout(() => {
        callback({ id: userId, name: `User ${userId}` });
    }, 500);
};

const userIds = [1, 2, 3, 4, 5];
let users = [];

userIds.forEach(id => {
    fetchUser(id, (user) => {
        users.push(user);
    });
});

console.log("All users:", users); // what's the output?

// 16.

const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.getFullName());

// 17.

const numbers = [1, 2, 3];

numbers = [4, 5, 6];

// 18.

<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ userInfo.name }}</p>
    <button @click="updateData">Update Data</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const message = ref('Hello Vue');
    const userInfo = reactive({
      name: 'Alice'
    });

    function updateData() {
      message = 'Updated Message';  

      userInfo.age = 30;  

      userInfo = { name: 'Bob' }; 
    }

    return {
      message,
      userInfo,
      updateData
    };
  }
};
</script>

