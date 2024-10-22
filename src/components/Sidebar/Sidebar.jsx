import { useState } from 'react'
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'
import { MdMenu } from 'react-icons/md'
import { MdBusinessCenter } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'

const sidebarVariants = {
    open: { width: '300px' },
    close: { width: '80px' },
}

const itemNameVariants = {
    open: { opacity: 1, transition: { delay: 0.1 } },
    close: { opacity: 0, transition: { duration: 0.1 } },
}

const subMenuVariants = {
    open: { height: 'auto', opacity: 1 },
    close: { height: 0, opacity: 0 },
}

export const Sidebar = () => {
    const [sidebarAvtive, setSidebarActive] = useState(false)
    const [option1Active, setOption1Active] = useState(false)
    const [option2Active, setOption2Active] = useState(false)
    const [option3Active, setOption3Active] = useState(false)
    const [option4Active, setOption4Active] = useState(false)

    const toggleSidebarStatus = () => {
        setSidebarActive(!sidebarAvtive)
        setOption1Active(false)
        setOption2Active(false)
        setOption3Active(false)
        setOption4Active(false)
    }
    const toggleOption1Status = () => {
        setOption1Active(!option1Active)
    }
    const toggleOption2Status = () => {
        setOption2Active(!option2Active)
    }
    const toggleOption3Status = () => {
        setOption3Active(!option3Active)
    }
    const toggleOption4Status = () => {
        setOption4Active(!option4Active)
    }

    return (
        <IconContext.Provider value={{ className: 'text-slate-200 w-10 h-10' }}>
            <motion.nav
                animate={sidebarAvtive ? 'open' : 'close'}
                variants={sidebarVariants}
                className={`bg-emerald-700 text-slate-200 p-5 flex flex-col items-start justify-between w-20 overflow-x-hidden`}
            >
                <div>
                    <div className='flex items-center w-full mb-10'>
                        <button onClick={toggleSidebarStatus}>
                            <MdMenu />
                        </button>
                        <motion.h2
                            animate={sidebarAvtive ? 'open' : 'close'}
                            variants={itemNameVariants}
                            className='ml-8 text-3xl w-full text-center'
                        >
                            Nombre
                        </motion.h2>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <div className='flex'>
                                <MdBusinessCenter />
                                <button
                                    className='my-3 w-60 flex items-center'
                                    onClick={toggleOption1Status}
                                >
                                    <motion.span
                                        animate={
                                            sidebarAvtive ? 'open' : 'close'
                                        }
                                        variants={itemNameVariants}
                                        className='ml-8'
                                    >
                                        Option 1
                                    </motion.span>
                                </button>
                            </div>
                            <motion.ul
                                animate={option1Active ? 'open' : 'close'}
                                variants={subMenuVariants}
                                className='ml-20 h-0 flex-col overflow-hidden'
                            >
                                <li className='mb-3'>
                                    <button>SubOption1</button>
                                </li>
                                <li className='mb-3'>
                                    <button>SubOption2</button>
                                </li>
                                <li className='mb-3'>
                                    <button>SubOption3</button>
                                </li>
                            </motion.ul>
                        </div>
                        <div>
                            <div className='flex'>
                                <MdBusinessCenter />
                                <button
                                    className='my-3 w-60 flex items-center'
                                    onClick={toggleOption2Status}
                                >
                                    <motion.span
                                        animate={
                                            sidebarAvtive ? 'open' : 'close'
                                        }
                                        variants={itemNameVariants}
                                        className='ml-8'
                                    >
                                        Option 2
                                    </motion.span>
                                </button>
                            </div>
                            <motion.ul
                                animate={option2Active ? 'open' : 'close'}
                                variants={subMenuVariants}
                                className='ml-20 h-0 flex-col overflow-hidden'
                            >
                                <li className='mb-3'>
                                    <button>SubOption1</button>
                                </li>
                                <li className='mb-3'>
                                    <button>SubOption2</button>
                                </li>
                                <li className='mb-3'>
                                    <button>SubOption3</button>
                                </li>
                            </motion.ul>
                        </div>
                        <div>
                            <div className='flex'>
                                <MdBusinessCenter />

                                <button
                                    className='my-3 w-60 flex items-center'
                                    onClick={toggleOption3Status}
                                >
                                    <motion.span
                                        animate={
                                            sidebarAvtive ? 'open' : 'close'
                                        }
                                        variants={itemNameVariants}
                                        className='ml-8'
                                    >
                                        Option 3
                                    </motion.span>
                                </button>
                            </div>
                            <motion.ul
                                animate={option3Active ? 'open' : 'close'}
                                variants={subMenuVariants}
                                className='ml-20 h-0 flex-col overflow-hidden'
                            >
                                <li className='mb-3'>
                                    <button>SubOption1</button>
                                </li>
                                <li className='mb-3'>
                                    <button>SubOption2</button>
                                </li>
                                <li className='mb-3'>
                                    <button>SubOption3</button>
                                </li>
                            </motion.ul>
                        </div>
                        <div>
                            <div className='flex'>
                                <MdBusinessCenter />

                                <button
                                    className='my-3 w-60 flex items-center'
                                    onClick={toggleOption4Status}
                                >
                                    <motion.span
                                        animate={
                                            sidebarAvtive ? 'open' : 'close'
                                        }
                                        variants={itemNameVariants}
                                        className='ml-8'
                                    >
                                        Option 4
                                    </motion.span>
                                </button>
                            </div>
                            <motion.ul
                                animate={option4Active ? 'open' : 'close'}
                                variants={subMenuVariants}
                                className='ml-20 h-0 flex-col overflow-hidden'
                            >
                                <li className='mb-3'>
                                    <button>SubOption1</button>
                                </li>
                                <li className='mb-3'>
                                    <button>SubOption2</button>
                                </li>
                                <li className='mb-3'>
                                    <button>SubOption3</button>
                                </li>
                            </motion.ul>
                        </div>
                    </div>
                </div>

                <div className='mt-10 flex'>
                    <MdPerson />
                    <button className='my-3 w-60 flex items-center'>
                        <motion.span
                            animate={sidebarAvtive ? 'open' : 'close'}
                            variants={itemNameVariants}
                            className='ml-8'
                        >
                            User
                        </motion.span>
                    </button>
                </div>
            </motion.nav>
        </IconContext.Provider>
    )
}
