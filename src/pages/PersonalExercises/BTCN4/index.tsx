import React, { useEffect, useState } from 'react'
import { UserModel } from './model';
import styles from './styles.module.css'
import clsx from 'clsx';
import APIService from './services';

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
      APIService.postUser(user);
      setUserList((prev)=>([...prev, user]))
    } catch (error) {
      console.log('@ERROR__', error);
    }
  }

  const getUserList = async () => {
    try{
      APIService.getUserList().then((data)=>{
        console.log('@DUKE_', data);
        setUserList(data);
      })
    }
    catch(error){

    }
  }

  useEffect(()=>{
    getUserList();
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
