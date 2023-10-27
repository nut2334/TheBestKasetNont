import React, {useEffect, useState} from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login';
import axios from 'axios';

function Fackbook() {
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [token, setToken] = useState('');
  const [feed, setFeed] = useState([]);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    const index = event.target.selectedIndex-1;
    setId(data[index].id);
    setToken(data[index].access_token);
  };

  useEffect(() => {
    const apiUrl = `https://graph.facebook.com/v18.0/${id}/feed?access_token=${token}`;
    axios.get(apiUrl)
      .then(response => {
        setFeed(response.data.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการเรียก API:', error);
      }, [id, token]);

  });

  //https://graph.facebook.com/v18.0/109287808726963/feed?access_token=EAAD5mEv4dPEBO9Ds89ZB5Dnl5wyNXwW2B73DmewdU55SW469U9czjP9FxZAgxUtwC4x8KUexfN6jRZBEmeFQOUWpLCCqfTB97be6z9EptZCMbmTsb2Ndg68EG7q7xi4qZCvZB13M1EecCwkuZAkIaZCrKy7KDZAufL5Q0beZBfYsGCHUlyid4MEF0JzOOkA4O68jrlEzIDHSCEywcPlGYFZCr0VvkEZD

 

    return (
        <div>
          <select value={selectedOption} onChange={handleSelect}>
        <option value="">โปรดเลือก</option>
        {options.map((option, index) => (
          <option key={index} value={option} >
            {option}
          </option>
        ))}
      </select>
      <p>คุณเลือก: {selectedOption}</p>
        <FacebookLogin
            appId="274432504919281"
            autoLoad={true}
            fields="accounts"
            scope='pages_show_list,pages_read_engagement'
            onSuccess={(response) => {
                console.log('Login Success!', response);
              }}
              onFail={(error) => {
                console.log('Login Failed!', error);
              }}
              onProfileSuccess={(response) => {
                console.log('Get Profile Success!', response);
                setOptions(response.accounts.data.map((page) => page.name))
                setData(response.accounts.data)
              }}
            />
          <ul>
            {feed.map((item, index) => (
              <li key={index}>
                {item.created_time}
                {item.message}
              </li>
            ))}
          </ul>
        </div>
    )
}
export default Fackbook