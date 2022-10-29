import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles.module.css'

export default function BTCN5() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    
    const onSubmit = (value:any) => {
        console.log('@DUKE', value);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.fieldNameInput}> Email: </p>
                <input
                    type="email"
                    className={styles.inputText}
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address!"
                        }
                    })}
                />

                <p className={styles.fieldNameInput}> Fullname:  </p>
                <input 
                    {...register("fullname", {
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                    className={styles.inputText}
                />
                <br /><br />
                <button type="submit" className={styles.buttonSubmit}>Submit</button>
            </form>

        </div>
    )
}
