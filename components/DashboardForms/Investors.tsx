import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { addInvestors, getInvestors, editInvestors, deleteInvestors, getInvestorFileFromBlob } from '../../services/investors'
import { InvestorType } from '../../types/investorsTypes'
import AddEdit from '../addEdit'
import AppLoginContext from '../AppLoginContext'
import CommonModal from '../CommonModal/CommonModal'
import 'react-toastify/dist/ReactToastify.css';

const Investors = () => {
    const [data, setData] = useState([]);
    const loginContext = useContext(AppLoginContext);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchAllInvestors = async () => {
        try {
            const resp = await getInvestors();
            setData(resp.data.payload)
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

    const createInvestors = async (data: any) => {
        const tempData: InvestorType = {
            heading: data.heading,
            file: data.file || null,
        }
        setIsLoading(true)
        try {
            const resp = await addInvestors(tempData, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            setIsOpen(false)
            await fetchAllInvestors()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
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
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            fetchAllInvestors();
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeleteFinancials = async (InvestorsId: number) => {
        try {
            const resp = await deleteInvestors(InvestorsId, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            await fetchAllInvestors()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
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
                            openFile={`/pdf-viewer/investor-information/${item.id}`}
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
            <ToastContainer />
        </div>
    )
}
export default Investors