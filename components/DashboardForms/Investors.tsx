import cogoToast from 'cogo-toast'
import React, { useContext, useEffect, useState } from 'react'
import { addInvestors, getInvestors, editInvestors, deleteInvestors, getInvestorFileFromBlob } from '../../services/investors'
import { InvestorType } from '../../types/investorsTypes'
import AddEdit from '../addEdit'
import AppLoginContext from '../AppLoginContext'
import CommonModal from '../CommonModal/CommonModal'


const Investors = () => {
    const [data, setData] = useState([]);
    const loginContext = useContext(AppLoginContext);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchAllInvestors = async () => {
        try {
            const resp = await getInvestors();
            setData(resp.data.payload)
            console.log(resp.data.payload)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAllInvestors();
    }, [])

    const closeModal = () => {
        setIsOpen(false)
    }

    //create new News
    const createInvestors = async (data: any) => {
        const tempData: InvestorType = {
            heading: data.heading,
            file: data.file || null,
        }
        setIsLoading(true)
        try {
            const resp = await addInvestors(tempData, loginContext.token)
            if (resp.data.status === 400) {
                cogoToast.error(resp.data?.message)
            } else {
                cogoToast.success(resp.data?.message)
            }
            setIsOpen(false)
            await fetchAllInvestors()
            if (resp.data.status === 400) {
                cogoToast.error(resp.data?.message)
            } else {
                cogoToast.success(resp.data?.message)
            }
        } catch (err: any) {
            cogoToast.error(err.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    const editInvestorsDetails = async (data: InvestorType, InvestorsId: number) => {
        const tempData: InvestorType = {
            heading: data.heading,
            file: data.file || null,
        }
        setIsLoading(true)
        try {
            const resp = await editInvestors(tempData, loginContext.token, InvestorsId)
            if (resp.data.status === 400) {
                cogoToast.error(resp.data?.message)
            } else {
                cogoToast.success(resp.data?.message)
            }
            fetchAllInvestors();
        } catch (err: any) {
            cogoToast.error(err.response.data?.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeleteFinancials = async (InvestorsId: number) => {
        try {
            const resp = await deleteInvestors(InvestorsId, loginContext.token)
            if (resp.data.status === 400) {
                cogoToast.error(resp.data?.message)
            } else {
                cogoToast.success(resp.data?.message)
            }
            await fetchAllInvestors()
        } catch (err: any) {
            cogoToast.error(err.response.data?.message)
        }
    }
    return (
        <div>
            <div className='flex flex-col items-center py-20'>
                <p>Selected: <span className='font-bold'>Investors</span></p>
                <button
                    onClick={() => setIsOpen(true)}
                    className='bg-primaryColor py-2 px-4 rounded-[5px] text-white font-bold mt-5'
                >Add More</button>
            </div>
            <div className='flex flex-col gap-4'>
                {data.map((item: any) => {
                    return (
                        <AddEdit
                            isAddNew={false}
                            tab="INVESTORS"
                            key={item.id}
                            data={item}
                            onDelete={(id:number)=>handleDeleteFinancials(id)}
                            openFile={(id: number)=>getInvestorFileFromBlob(id)}
                            onEdit={(data, id)=>editInvestorsDetails(data, id)}
                        />
                    )

                })}
            </div>
            <CommonModal isOpen={isOpen} >
                <AddEdit
                    tab="INVESTORS"
                    isAddNew={true}
                    onClose={() => closeModal()}
                    onAdd={(data)=>createInvestors(data)}
                    isLoading={isLoading}
                />
            </CommonModal>
        </div>
    )
}
export default Investors