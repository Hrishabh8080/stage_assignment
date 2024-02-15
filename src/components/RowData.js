import React, { useEffect, useState } from 'react'
import { getRowData } from '../CallApi'
import './RowData.scss'

const RowData = ({title}) => {
    const [data, setData] = useState([]);
    const [rootUrlHorizontal, setRootUrlHorizontal] = useState('');
    const [rootUrlVertical, setRootUrlVertical] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getRowData();
                setData(data.rowData);
                setRootUrlHorizontal(data.rootUrlHorizontal);
                setRootUrlVertical(data.rootUrlVertical);
            } catch (error) {
                console.error('Failed to fetch row data:', error);
            }
        };

        fetchData();

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='rowData'>
            <div className='heading'>{title}</div>
            <div className='cardContainer'>
                {data && data.map(item => (
                    <div className="card" key={item._id}>
                        <img src={screenWidth > 768 ? rootUrlHorizontal + '/' + item.horizontal : rootUrlVertical + '/' + item.vertical} alt="thumnail" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RowData