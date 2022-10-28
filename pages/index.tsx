import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import AppLoginContext from '../components/AppLoginContext';
import { routes } from '../routes/routes';

const Index = () => {
  const router = useRouter();
  const loginContext = useContext(AppLoginContext)

  useEffect(()=>{
    if(router.pathname === routes.root){
      router.push(routes.homepage);
    }
  }, [router.pathname])

  return (
    <div></div>
  )
}

export default Index