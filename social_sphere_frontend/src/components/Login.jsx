// Package/Dependency Imports
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
// Local Imports
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video 
                    src={shareVideo}
                    type='video/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={logo} width="130px" alt="SocialSphere" />
                    </div>

                    <div className='shadow-2xl'>
                        <GoogleLogin
                            onSuccess={(response) => {
                                console.log(response);
                            }}
                            onError={() => {
                                console.log("error");
                            }}
                            useOneTap
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;
