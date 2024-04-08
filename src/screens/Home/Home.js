import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { userDashboard } from '../../API/LoginStatus';

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
    }, [navigate])
    return (
        <>
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
                                        {(item.accountType === "HSA") ?
                                            <p className='accountName' style={{ color: '#00a700' }}>{item.accountName}</p>
                                            :
                                            (item.accountType === "ESF") ?
                                                <p className='accountName' style={{ color: '#922828' }}>{item.accountName}</p>
                                                :
                                                (item.accountType === "HIA") ?
                                                    <p className='accountName' style={{ color: '#ffae00' }}>{item.accountName}</p>
                                                    :
                                                    <p className='accountName' style={{ color: '#2600ff' }}>{item.accountName}</p>}

                                        <p className='employerName'>{item.employerName}</p>
                                    </div>
                                </div>
                                <div className="accountCard-b">
                                    <div className="accountCard-2">
                                        <button className="custom-btn btn-1">View Investment Dashboard</button>
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