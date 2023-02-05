npm i react-router-dom:
npm i --save @fortawesome/free-solid-svg-icons
npm install react-slick --save

# My Book Store

### `npm i`

### `npm install -g json-server`

### `json-server db.json --routes routes.json`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

import React, { useState } from 'react';

const RegistrationForm = () => {
const [formData, setFormData] = useState({
username: '',
email: '',
password: '',
});

const handleInputChange = (event) => {
setFormData({
...formData,
[event.target.name]: event.target.value,
});
};

const handleSubmit = (event) => {
event.preventDefault();
// Add logic to submit form data to server here
};

return (
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="username">Username:</label>
<input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
</div>
<div>
<label htmlFor="email">Email:</label>
<input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
</div>
<div>
<label htmlFor="password">Password:</label>
<input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
</div>
<button type="submit">Submit</button>
</form>
);
};

export default RegistrationForm;
