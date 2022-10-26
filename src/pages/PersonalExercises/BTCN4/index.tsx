import React, { useState } from 'react'
import { UserModel } from './model';
import styles from './styles.module.css'
import clsx from 'clsx';


const intiValue: UserModel = {
  email: '',
  password: '',
  fullname: '',
  age: 0,
  id: '',
}

export default function BTCN4() {
  const [userList, setUserList] = useState<UserModel[]>([]);
  const [user, setUser] = useState<UserModel>(intiValue);
  const [repeatPassWord, setRepeatPassword] = useState<string>('');

  const handleSubmit = ()=>{
    setUserList((prev)=>{
      return [...prev, user];
    })
  }


  console.log('@DUKE_', user);
  

  return (
    <div className={styles.container}>
        <div className={styles.registerContainer}>
          <h2>Registration</h2>
          <input className={styles.inputStyle} type="email" placeholder="Your email..." onChange={(e)=>setUser((prev)=>{return {...prev, email: e.target.value}})} />
          <input className={styles.inputStyle} type="password" placeholder="Your password..."   onChange={(e)=>setUser((prev)=>{return {...prev, password: e.target.value}})} />
          <input className={styles.inputStyle} type="password" placeholder="Repeat your password..."  onChange={(e)=>setRepeatPassword(e.target.value)} />
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
