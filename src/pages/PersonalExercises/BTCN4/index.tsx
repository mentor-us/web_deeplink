import React, { useEffect, useState } from 'react'
import { UserModel } from './model';
import styles from './styles.module.css'
import clsx from 'clsx';


const intiValue: UserModel = {
  email: '',
  password: '',
  fullname: '',
  age: 0,
}

export default function BTCN4() {
  const [userList, setUserList] = useState<UserModel[]>([]);
  const [user, setUser] = useState<UserModel>(intiValue);
  const [repeatPassWord, setRepeatPassword] = useState<string>('');

  const postData = async(url = '', data = {}) => {
    
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log('@DUKE_BODY', JSON.stringify(data));

    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleSubmit = async()=>{
    if(repeatPassWord !== user.password){
      alert('Wrong repeat password!');
      return;
    }

    if(!user.email){
      alert('Empty Email');
      return;
    }


    if(!user.fullname){
      alert('Empty fullname');
      return;
    }


    if(!user.password){
      alert('Empty password');
      return;
    }

    if(!user.age){
      alert('Empty age');
      return;
    }
    try {
      const res = await postData('http://localhost:8080/api/user/', user);
      
      setUserList((prev)=>{
        return [...prev, user];
      })
    } catch (error) {
      console.log('@DUKE__', error);
    }
    
  }

  const getUserList = async () => {
    const url = 'http://localhost:8080/api/user/';
    return fetch(url, 
      {
        method: 'GET', 
        mode: 'no-cors',
        headers:{
          'Access-Control-Allow-Origin':'*'
        },
      }).then((response):any=>{
        console.log('@DUKE__', response);
        
        if(response.ok){
            return response.json().then(response=>{
                console.log('@DUKE_', response);
                return {data: response || []};
            })
        }
        response.json().then(response=>{
        })
        return response.json().then(status=>({status}))
    })
  }

  useEffect(()=>{
    try {
        getUserList();
    } catch (error) {
      console.log('@ERROR', error);
      
    }
   
  }, [])
  
  return (
    <div className={styles.container}>
        <div className={styles.registerContainer}>
          <h2>Registration</h2>
          <input className={styles.inputStyle} type="email" placeholder="Your email..." onChange={(e)=>setUser((prev)=>{return {...prev, email: e.target.value}})} />
          <input className={styles.inputStyle} type="password" placeholder="Your password..."   onChange={(e)=>setUser((prev)=>{return {...prev, password: e.target.value}})} />
          <input className={styles.inputStyle} type="password" placeholder="Repeat your password..."  onChange={(e)=>setRepeatPassword(e.target.value)} />
          <input className={styles.inputStyle} type="text" placeholder="Your fullname..."   onChange={(e)=>setUser((prev)=>{return {...prev, fullname: e.target.value}})} />
          <input className={styles.inputStyle} type="number" placeholder="Your age..."  onChange={(e)=>setUser((prev)=>{return {...prev, age: +e.target.value}})} />
          <button onClick={handleSubmit} className={clsx(styles.inputStyle, styles.submitButton)}>Submit</button>
        </div>

      <div className={styles.userListContainer}>
        <ul>
          {userList.map((item:UserModel)=>{
            return <li>{item.email}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
