
function saveData(event) {
	event.preventDefault();
	const userName = event.target.name.value;
	const mail = event.target.email.value;
	const userData = {
		userName,
		mail
	};
	localStorage.setItem(userData.userName, JSON.stringify(userData));
	showToDisplay(userData);
}

function showToDisplay(userData) {
	if (userData.userName === '' || userData.mail === '') {
		// alert('Please enter all fields');
		var msg = document.querySelector('.msg');
		msg.classList.add('error');
		msg.innerHTML = 'Please enter all fields';

		// Remove error after 3 seconds
		setTimeout(() => msg.remove(), 3000);
	} else {
		const userlist = document.querySelector('#users');
		userlist.innerHTML = userlist.innerHTML + `<li> ${userData.userName} : ${userData.mail} </li>`;
		// Clear fields
		userData.userName = '';
		userData.mail = '';
	}
}

/*
// Create new list item with user
		const li = document.createElement('li');
		// const userDetails = {
		//   userName,
		//   email
		// };
		// const userDetailsAsStrings = JSON.stringify(userDetails);
		// localStorage.setItem('userDetail',userDetailsAsStrings);
		// localStorage.setItem('userDetails',JSON.stringify(`${nameInput.value} : ${emailInput.value}`));
		// console.log(localStorage);


		// Add text node with input values
		li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));


		// Add HTML
		// li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

		// Append to ul
		userList.appendChild(li);
*/