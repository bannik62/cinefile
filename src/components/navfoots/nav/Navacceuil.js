import React from 'react';

const Navacceuil = () => {
    return (
        <div>
            <nav className='border border-black bg-shark-900 h-3/5'>
                <div className=" flex flex-row w-full">

                    <div className="flex  justify-center w-full m-2 ">
                        <div className="border border-black bg-white rounded-full  w-128 h-128 ">
                            <svg className='rounded-full' width="46" height="45" viewBox="0 0 280 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_162_1580)">
                                    <path d="M0 99.5V199H140H280V99.5V-3.56138e-06H140H0V99.5ZM50.0938 28.6773V41.9622H35.6563H21.2188V28.6773V15.3923H35.6563H50.0938V28.6773ZM258.781 28.6773V41.9622H244.344H229.906V28.6773V15.3923H244.344H258.781V28.6773ZM50.0938 64.1344V77.3278H35.6563H21.2188V64.1344V50.9411H35.6563H50.0938V64.1344ZM258.781 64.1344V77.3278H244.344H229.906V64.1344V50.9411H244.344H258.781V64.1344ZM151.003 76.2284C175.722 88.1757 195.891 97.9974 195.825 98.0707C195.65 98.199 105.022 142.012 104.628 142.14C104.409 142.214 104.344 133.308 104.344 97.9608V53.6714L105.197 54.0928C105.656 54.331 126.263 64.281 151.003 76.2284ZM50.0938 99.5V112.693H35.6563H21.2188V99.5V86.3066H35.6563H50.0938V99.5ZM258.781 99.5V112.693H244.344H229.906V99.5V86.3066H244.344H258.781V99.5ZM50.0938 134.866V148.059H35.6563H21.2188V134.866V121.672H35.6563H50.0938V134.866ZM258.781 134.866V148.059H244.344H229.906V134.866V121.672H244.344H258.781V134.866ZM50.0938 170.323V183.608H35.6563H21.2188V170.323V157.038H35.6563H50.0938V170.323ZM258.781 170.323V183.608H244.344H229.906V170.323V157.038H244.344H258.781V170.323Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_162_1580">
                                        <rect width="280" height="199" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="pb-6 absolute top-0 right-0">
                        <div>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.4998 37.5833C29.9347 37.5833 37.5832 29.9348 37.5832 20.5C37.5832 11.0651 29.9347 3.41663 20.4998 3.41663C11.065 3.41663 3.4165 11.0651 3.4165 20.5C3.4165 29.9348 11.065 37.5833 20.4998 37.5833Z" stroke="#89C232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.4998 19.6458C22.8585 19.6458 24.7707 17.7337 24.7707 15.375C24.7707 13.0163 22.8585 11.1041 20.4998 11.1041C18.1411 11.1041 16.229 13.0163 16.229 15.375C16.229 17.7337 18.1411 19.6458 20.4998 19.6458Z" stroke="#89C232" strokeWidth="2" strokeLinejoin="round" />
                                <path d="M8.56055 32.742C8.85412 28.2906 12.5577 24.7709 17.0834 24.7709H23.9168C28.4365 24.7709 32.1363 28.2812 32.4385 32.7243" stroke="#89C232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                    </div>

                </div>
                <div className='flex  justify-center'>
                    <p className='text-xl mb-2 text-shark-text'>CinéFile</p>
                </div>

                <div className="search flex justify-center w-full mb-2">
                    <input type="text" className='rounded-3xl m-2 w-3/4' placeholder=' Rechercher' />
                    <div className='notif pb-6 relative top-23 left-3'>
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 17V18H2.00002V17L4.00002 15V9C4.00002 5.9 6.03002 3.17 9.00002 2.29V2C9.00002 1.46957 9.21073 0.960859 9.58581 0.585786C9.96088 0.210714 10.4696 0 11 0C11.5305 0 12.0392 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V2.29C15.97 3.17 18 5.9 18 9V15L20 17ZM13 19C13 19.5304 12.7893 20.0391 12.4142 20.4142C12.0392 20.7893 11.5305 21 11 21C10.4696 21 9.96088 20.7893 9.58581 20.4142C9.21073 20.0391 9.00002 19.5304 9.00002 19M18.75 1.19L17.33 2.61C18.1758 3.44542 18.8473 4.44042 19.3056 5.53732C19.764 6.63422 20 7.8112 20 9H22C22 6.07 20.84 3.25 18.75 1.19ZM1.89962e-05 9H2.00002C2.00002 6.6 2.96002 4.3 4.67002 2.61L3.25002 1.19C2.2179 2.21157 1.39909 3.42807 0.841161 4.76881C0.283234 6.10955 -0.00268464 7.54781 1.89962e-05 9Z" fill="#86C232" />
                        </svg>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navacceuil;