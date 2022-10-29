import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { addFinancials, deleteFinancials, editFinancials, getFinancialFileFromBlob, getFinancialMdaFileFromBlob, getFinancials } from '../../services/financials'
import { FinancialType } from '../../types/financialTypes'
import AddEdit from '../addEdit'
import AppLoginContext from '../AppLoginContext'
import CommonModal from '../CommonModal/CommonModal'
import 'react-toastify/dist/ReactToastify.css';


const Financials = () => {
    const [data, setData] = useState([]);
    const loginContext = useContext(AppLoginContext);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchAllFinancials = async () => {
        try {
            const resp = await getFinancials();
            setData(resp.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAllFinancials();
    }, [])

    const closeModal = () => {
        setIsOpen(false)
    }

    //create new News
    const createFinancials = async (data: any) => {
        const tempData: FinancialType = {
            year: data.year,
            heading: data.heading,
            file: data.file,
            mdaFile: data.mdaFile
        }
        setIsLoading(true)
        try {
            const resp = await addFinancials(tempData, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            fetchAllFinancials()
            closeModal()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        }
    }

    const editFinancialsDetails = async (data: FinancialType, FinancialsId: number) => {
        const tempData: FinancialType = {
            year: data.year,
            heading: data.heading,
            file: data.file,
            mdaFile: data.mdaFile
        }
        setIsLoading(true)
        try {
            const resp = await editFinancials(tempData, loginContext.token, FinancialsId)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            fetchAllFinancials()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeleteFinancials = async (FinancialsId: number) => {
        try {
            const resp = await deleteFinancials(FinancialsId, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            fetchAllFinancials()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }
    return (
        <div>
            <div className='flex flex-col items-center py-20'>
                <p>Selected: <span className='font-bold'>Financials</span></p>
                <button
                    onClick={() => setIsOpen(true)}
                    className='bg-primaryColor py-2 px-4 rounded-[5px] text-white font-bold mt-5'
                >Add More</button>
            </div>
            <div className='flex flex-col gap-4'>
                {data?.map((item: any) => {
                    return (
                        <AddEdit
                            isAddNew={false}
                            tab="FINANCIALS"
                            key={item.id}
                            data={item}
                            onEdit={(data, id) => editFinancialsDetails(data, id)}
                            onDelete={(id) => handleDeleteFinancials(id)}
                            isLoading={isLoading}
                            openFile={(id: number)=> getFinancialFileFromBlob(id)}
                            openMda={(id: number)=> getFinancialMdaFileFromBlob(id)}
                        />
                    )

                })}
            </div>
            <CommonModal isOpen={isOpen} >
                <AddEdit
                    tab="FINANCIALS"
                    isAddNew={true}
                    onClose={() => closeModal()}
                    onAdd={(data) => createFinancials(data)}
                    isLoading={isLoading}
                />
            </CommonModal>
            <ToastContainer />
        </div>
    )
}

export default Financials
