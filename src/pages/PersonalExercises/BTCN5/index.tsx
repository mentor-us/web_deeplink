import { useForm } from 'react-hook-form'
import styles from './styles.module.css'

export default function BTCN5() {
    const {handleSubmit, watch, register, formState: {errors}} = useForm();
    
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

                <p className={styles.fieldNameInput}> Password:  </p>
                <input 
                    type="password"
                    {...register("password", {
                        required: true
                    })}
                    className={styles.inputText}
                />

                <p className={styles.fieldNameInput}> Confirm your password:  </p>
                <input 
                    type="password"
                    {...register("confirm_password", {
                        required: true,
                        validate: (val: string) => {
                            if(watch('password') !== val) {
                                return "Your passwords do not match!";
                            }
                        }
                    })}
                    className={styles.inputText}
                />

                <p className={styles.fieldNameInput}> Fullname:  </p>
                <input 
                    {...register("fullname", {
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                    className={styles.inputText}
                />

                <p className={styles.fieldNameInput}> Age:  </p>
                <input 
                    type="number"
                    {...register("age", {validate: (value: number)=>{
                        if(value < 1){
                            return 'Your age not found!'
                        }
                    }})}
                    className={styles.inputText}
                />

                <p className={styles.fieldNameInput}> Address:  </p>
                <input 
                    {...register("address", {
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
