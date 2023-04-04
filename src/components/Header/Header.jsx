import React, { useState } from 'react';

import { Bars3Icon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between px-12'>
            <div className="log">
                <p>HUB</p>
            </div>
            <div className="md:flex gap-2">
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open === true ? <XMarkIcon className='h-6 w-6' /> :
                                <Bars3Icon className='h-6 w-6 text-blue-500' />
                        }
                    </span>
                </div>
                <div>
                    <div className={`md:flex md:static absolute duration-700 ${open ? 'top-6' : '-top-48'}`}>
                        <p> <a href="/">About</a></p>
                        <p> <a href="/">Menu</a></p>
                        <p> <a href="/">Contact</a></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;