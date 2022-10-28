import cogoToast from 'cogo-toast';
import React, { useContext, useEffect, useState } from 'react'
import { editAgmConfig, getAgmConfig } from '../../services/agm';
import AppLoginContext from '../AppLoginContext';

const Agm = () => {
    const [isAgmEnabled, setIsAgmEnabled] = useState<boolean>(false);
    const loginContext = useContext(AppLoginContext);
    const fetchAgmConfig = async () => {
        try {
            let response = await getAgmConfig();
            setIsAgmEnabled(response.data.payload[0].isAgmTabEnabled)
        } catch (error:any) {
            cogoToast.error(error.response.data?.message)
        }
    }

    useEffect(()=>{
        fetchAgmConfig();
    }, [])

    const toggleAgmConfig = async (e:any) => {
        const data = {
            isAgmTabEnabled: e.target.checked
        }
        try{
            let resp = await editAgmConfig(1, data, loginContext.token)
            if (resp.data.status === 400) {
                cogoToast.error(resp.data?.message)
            } else {
                cogoToast.success(resp.data?.message)
            }
            fetchAgmConfig();
        } catch(err: any) {
            cogoToast.error(err.response.data.message)
        }
    }

    return (
        <div>
            <div className='flex flex-col items-center py-20'>
                <p>Selected: <span className='font-bold'>AGM - Annual General Meeting</span></p>
            </div>
            <div className='flex items-center justify-center gap-7'>
                <p className='font-bold'>AGM tab toggle - </p>
                <input 
                    type="checkbox" 
                    checked={isAgmEnabled}
                    onChange={e=>toggleAgmConfig(e)}
                />
            </div>
        </div>
    )
}

export default Agm