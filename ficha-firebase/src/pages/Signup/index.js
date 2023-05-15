import {useState, useContext} from 'react'

import logo from '../../assets/gato-preto-2.jpg'

import { Link } from 'react-router-dom'

import {AuthContext} from '../../contexts/auth' 

import { toast } from 'react-toastify'

export default  function Sigunp(){

    const [name,setName] = useState('')
    const [email,setEmail]  = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassowrd,setConfirmpassword]  = useState ('');

    const {signup,loadingAuth} = useContext(AuthContext);




     async function handleSubmit(e){
        e.preventDefault();

        if(name !== '' && email !== '' && password !== ''  && confirmpassowrd !== '' ){
           
         await   signup(email,password,name,confirmpassowrd)

        }   
        else if (password !== confirmpassowrd){
            toast.error("As senhas não são iguais");
            return;
        }
        else {
            toast.error("Preencha todos os campos!")
        } 

    }

return(
    <div className='container-center'>
        <div className='login'>
            <div className='login-area'>
                <img src={logo} alt='Logo do sistema de chamadas' />
            </div>
        

        <form onSubmit={handleSubmit}>
            <h1>Cadrastrar</h1>

            <input
             type='text'  
             placeholder='Seu nome' 
             value={name}
             onChange={(e)=> setName(e.target.value) }
            />

            <input
             type='text'  
             placeholder='igor@teste.com' 
             value={email}
             onChange={(e)=> setEmail(e.target.value) }
            />
            
            <input
             type='password'  
             placeholder='*******' 
             value={password}
             onChange={(e)=> setPassword(e.target.value) }
            />

                <input
                 type='password'  
                 placeholder='Confirmar sua senha' 
                 value={confirmpassowrd}
                 onChange={(e)=> setConfirmpassword(e.target.value) }
                />


            
         <button type='submit'>
            {loadingAuth ? 'Carregando....' : 'Cadrastar'}
         </button>

        </form>

        <Link to="/" >Já possui uma conta?  faça login</Link>

        </div>
    </div>
);
}