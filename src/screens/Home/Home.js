import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { userDashboard } from '../../API/LoginStatus';
import Navbar from '../NavBar/Navbar';

import './Home.css';

function Home() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [dashboardData, setDashboardData] = useState();
    useEffect(() => {
        if (!localStorage.getItem("username")) {
            navigate('/')
        }
        async function getDashboardData() {
            try {
                const data = await userDashboard(12);
                console.log("UseEffect Updating");
                setIsLoading(true);
                setDashboardData(data);
            } catch (error) {
                console.log("Something Went Wrong");
            }
        }
        getDashboardData();
    })

    function handleAccount(item) {
        localStorage.setItem("accountDetails", JSON.stringify(item));
        //console.log(JSON.stringify(item))
        navigate('/accountDetails');
    }

    return (
        <>
            <Navbar currentTab="home" />
            {isLoading &&
                <div className='mainDiv'>
                    <div className='welcomeUser'>
                        Hello, {localStorage.getItem("username")}
                    </div>
                    {console.log(dashboardData)}
                    {dashboardData.map((item) => {
                        return (
                            <div className="accountCard" key={item.accountId}>
                                <div className="accountCard-a">
                                    <div className="accountCard-1">
                                        <p className='accountName'>{item.accountName}</p>
                                        <p className='employerName'>{item.employerName}</p>
                                    </div>
                                </div>
                                <div className="accountCard-b">
                                    <div className="accountCard-2">
                                        <button onClick={handleAccount.bind(this, item)} className="custom-btn btn-1">View Investment Dashboard</button>
                                    </div>
                                    <div className='balance'>
                                        Balance: ${item.balance}
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>}
        </>
    )
}

export default Home;