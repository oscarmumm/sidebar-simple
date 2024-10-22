import { easeIn, easeInOut, motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { useState } from 'react'
// ICONS
import { MdOutlineHome } from 'react-icons/md'
import { MdDashboard } from 'react-icons/md'
import { MdOutlineAssessment } from 'react-icons/md'
import { MdLayers } from 'react-icons/md'
import { MdOutlineAllInbox } from 'react-icons/md'

import { MdPerson } from 'react-icons/md'

const optionsBarVariants = {
    open: { x: 320 },
    close: { x: 0, transition: { delay: 0.1 } },
}

const groupVariants = {
    open: { opacity: 1, x: 320, transition: { type: 'tween', delay: 0.1 } },
    close: { opacity: 0, x: 0 },
}

export const NewSidebar = () => {
    const [optionsBarActive, setOptionsBarActive] = useState(false)
    const [group1Active, setGroup1Active] = useState(false)
    const [group2Active, setGroup2Active] = useState(false)
    const [group3Active, setGroup3Active] = useState(false)
    const [group4Active, setGroup4Active] = useState(false)

    const openGroup1 = () => {
        if (optionsBarActive) {
            if (group2Active || group3Active || group4Active) {
                setGroup2Active(false)
                setGroup3Active(false)
                setGroup4Active(false)
                setGroup1Active(true)
            } else {
                setOptionsBarActive(false)
                setGroup1Active(false)
            }
        } else {
            setOptionsBarActive(true)
            setGroup1Active(true)
        }
    }

    const openGroup2 = () => {
        if (optionsBarActive) {
            if (group1Active || group3Active || group4Active) {
                setGroup1Active(false)
                setGroup3Active(false)
                setGroup4Active(false)
                setGroup2Active(true)
            } else {
                setOptionsBarActive(false)
                setGroup2Active(false)
            }
        } else {
            setOptionsBarActive(true)
            setGroup2Active(true)
        }
    }

    const openGroup3 = () => {
        if (optionsBarActive) {
            if (group1Active || group2Active || group4Active) {
                setGroup1Active(false)
                setGroup2Active(false)
                setGroup4Active(false)
                setGroup3Active(true)
            } else {
                setOptionsBarActive(false)
                setGroup3Active(false)
            }
        } else {
            setOptionsBarActive(true)
            setGroup3Active(true)
        }
    }

    const openGroup4 = () => {
        if (optionsBarActive) {
            if (group1Active || group2Active || group3Active) {
                setGroup1Active(false)
                setGroup2Active(false)
                setGroup3Active(false)
                setGroup4Active(true)
            } else {
                setOptionsBarActive(false)
                setGroup4Active(false)
            }
        } else {
            setOptionsBarActive(true)
            setGroup4Active(true)
        }
    }

    return (
        <IconContext.Provider value={{ className: 'text-slate-200 w-10 h-10' }}>
            <motion.nav className='bg-slate-700 text-slate-200 p-5 w-20 relative flex flex-col justify-between z-50'>
                <div>
                    <ul>
                        <li className='mb-5'>
                            <button onClick={openGroup1}>
                                <MdOutlineHome />
                            </button>
                        </li>
                        <li className='mb-5'>
                            <button onClick={openGroup2}>
                                <MdDashboard />
                            </button>
                        </li>
                        <li className='mb-5'>
                            <button onClick={openGroup3}>
                                <MdOutlineAssessment />
                            </button>
                        </li>
                        <li className='mb-5'>
                            <button onClick={openGroup4}>
                                <MdLayers />
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <MdPerson />
                </div>
            </motion.nav>
            <motion.div
                animate={optionsBarActive ? 'open' : 'close'}
                variants={optionsBarVariants}
                transition={{ type: 'tween', duration: 0.2 }}
                className='bg-slate-600 text-slate-200 w-60 h-screen -ml-60 p-5 absolute top-0 flex flex-col justify-between items-start z-30'
            >
                <h2 className='text-3xl'>Company Name</h2>
                <button>User</button>
            </motion.div>
            {/* -------------GROUP 1--------------- */}
            <motion.div
                animate={group1Active ? 'open' : 'close'}
                variants={groupVariants}
                transition={{ type: 'tween', duration: 0.2 }}
                className='text-slate-200 w-52 -ml-60 pt-28 p-5 absolute top-0 z-40'
            >
                <h2 className='text-2xl font-bold mb-5'>Group 1</h2>
                <ul>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                </ul>
            </motion.div>
            {/* -------------GROUP 2--------------- */}
            <motion.div
                animate={group2Active ? 'open' : 'close'}
                variants={groupVariants}
                transition={{ type: 'tween', duration: 0.2 }}
                className='text-slate-200 w-52 -ml-60 pt-28 p-5 absolute top-0 z-40'
            >
                <h2 className='text-2xl font-bold mb-5'>Group 2</h2>
                <ul>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                </ul>
            </motion.div>
            {/* -------------GROUP 3--------------- */}
            <motion.div
                animate={group3Active ? 'open' : 'close'}
                variants={groupVariants}
                transition={{ type: 'tween', duration: 0.2 }}
                className='text-slate-200 w-52 -ml-60 pt-28 p-5 absolute top-0 z-40'
            >
                <h2 className='text-2xl font-bold mb-5'>Group 3</h2>
                <ul>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                </ul>
            </motion.div>
            {/* -------------GROUP 4--------------- */}
            <motion.div
                animate={group4Active ? 'open' : 'close'}
                variants={groupVariants}
                transition={{ type: 'tween', duration: 0.2 }}
                className='text-slate-200 w-52 -ml-60 pt-28 p-5 absolute top-0 z-40'
            >
                <h2 className='text-2xl font-bold mb-5'>Group 4</h2>
                <ul>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <MdOutlineAllInbox />
                        <span className='ml-3'>Suboption</span>
                    </li>
                </ul>
            </motion.div>
        </IconContext.Provider>
    )
}
