import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import {
    faGear,
    faHouse,
    faKeyboard,
    faUser,
    faLock,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
export default function LeftSide(props) {
    const Params = useLocation();
    const { list } = props;
    const FeedData = [
        {
            id: 1,
            Icon: faHouse,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            Icon: faGear,
            title: 'All history',
            link: '/allhistory',
        },
        {
            id: 3,
            Icon: faUsers,
            title: 'All People',
            link: '/people',
        },
        {
            id: 4,
            Icon: faKeyboard,
            title: 'Statistical',
            link: '/statis',
        },
        {
            id: 3,
            Icon: faUsers,
            title: 'All User',
            link: '/userlist',
        },
        {
            id: 5,
            Icon: faUser,
            title: 'Profile',
            link: '/profile',
        },
        {
            id: 6,
            Icon: faLock,
            title: 'Change Password',
            link: '/password',
        },
    ];
    return (
        <>
            <div
                className={`leftside bg-white lg:w-1/6 min-w-[250px] w-[200px] min-h-full pt-[20px] + ${
                    list ? 'block ' : 'hidden'
                }`}
            >
                <ul className="px-[15px] ">
                    {FeedData.map((Feed, Index) => (
                        <Link to={Feed.link} key={Index}>
                            <li
                                className={`cursor-pointer py-[10px] px-[20px] font-normal + ${
                                    Params.pathname === Feed.link
                                        ? 'text-white bg-[#4a4fb0] rounded-lg'
                                        : ''
                                }`}
                            >
                                <span className="flex text-center opacity-100 visible relative ">
                                    <span className="inline-block min-w-[20px] mr-[15px] ">
                                        <FontAwesomeIcon icon={Feed.Icon} />
                                    </span>
                                    <span className="text-[14px]">{Feed.title}</span>
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}
