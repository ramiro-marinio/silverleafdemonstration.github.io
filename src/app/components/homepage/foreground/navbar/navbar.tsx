import { NavLink } from "./link"

export default function Navbar(props:{invisible?:boolean}){
    return (
        <div className={`w-full h-fit ${props.invisible ? 'opacity-0' : 'absolute top-0 left-0'} `}>
            <div className="w-full backdrop-blur-md flex flex-row items-center justify-around sticky h-[120px]">
                <h1 className="text-4xl font-bold">
                    SilverLeaf
                </h1>
                <div className="flex flex-row justify-between">
                    <NavLink to='about-us'>About Us</NavLink>
                    <NavLink to='recruiters'>For Recruiters</NavLink>
                    <NavLink to='clients'>For Clients</NavLink>
                    <NavLink to='help'>Help</NavLink>
                </div>
                <div className="flex flex-row justify-between">
                    <NavLink to='log-in'>Log In</NavLink>
                    <NavLink to='sign-up'>Sign Up</NavLink>
                    <NavLink fill to='demo'>Request Demo</NavLink>
                </div>
            </div>
        </div>
    )
}